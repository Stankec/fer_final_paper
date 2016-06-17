class ServerQueryProcessor
  DELIMITER = '||'.freeze
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    self.profile = find_profile_by_cookies
    self.profile ||= find_profile_by_headers
    self.profile ||= find_profile_by_ip
    self.profile ||= Profile.create
    store_data
    response
  end

  private

  attr_accessor :profile

  def find_profile_by_cookies
    profile_id = params.dig(:cookies, :id)
    return unless profile_id
    Profile.find_by(id: profile_id)
  end

  def find_profile_by_headers
    etag = params.dig(:http_headers, 'ETag')
    return unless etag

    profile_id = profile_id.split(DELIMITER, 2).last

    if profile_id
      Profile.find_by(id: profile_id)
    else
      TrackingTag
        .where(tag_type: 'ETag', tag: etag, path: params[:path])
        .first
        .try(:profile)
    end
  end

  def find_profile_by_ip
    address_queries = []
    address_queries << 'address LIKE :global_ip' if params[:global_ip].present?
    address_queries << 'address LIKE :local_ip' if params[:local_ip].prsent?

    return if address_queries.empty?

    IpAdress
      .where(
        address_queries.join(' OR '),
        global_ip: params[:global_ip],
        local_ip: params[:local_ip]
      )
      .order(updated_at: :desc)
      .first
      .try(:profile)
  end

  def store_data
    store_ip
    store_etag
  end

  def store_ip
    store_ip_with_type(:global)
    store_ip_with_type(:local)
  end

  def store_ip_with_type(type)
    key = "#{type}_ip".to_sym
    ip = params[key]
    return unless ip

    IpAdress
      .where(adress_type: :type, address: ip, profile: profile)
      .first_or_create
  end

  def store_etag
    etag = params.dig(:http_headers, 'ETag')
    return unless etag
    TrackingTag
      .where(
        tag_type: 'ETag',
        tag: etag,
        path: params[:path],
        profile: profile
      )
      .first_or_create
  end

  def response
    http_headers = params[:http_headers] || {}
    etag = http_headers['Etag'].to_s.split(DELIMITER, 2).last
    {
      headers: http_headers.merge(
        'ETag' => "#{etag}||#{profile.id}"
      ),
      identifier: profile.id
    }
  end
end
