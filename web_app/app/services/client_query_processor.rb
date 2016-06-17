class ServerQueryProcessor
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    self.profile = find_profile_by_time_drift
    self.profile ||= find_profile_by_gpu_info
    self.profile ||= find_profile_by_cpu_info
    self.profile ||= Profile.create
    store_data
    response
  end

  private

  attr_accessor :profile

  def find_profile_by_time_drift
    return unless params[:time_drift]
    Fingerprint
      .where(time_drift: params[:time_drift])
      .order(updated_at: :desc)
      .first
      .try(:profile)
  end

  def find_profile_by_gpu_info
    return unless params[:gpu_info]
    Fingerprint
      .where(gpu_information: params[:gpu_info])
      .order(updated_at: :desc)
      .first
      .try(:profile)
  end

  def find_profile_by_cpu_info
    return unless params[:cpu_info]
    Fingerprint
      .where(cpu_information: params[:cpu_info])
      .order(updated_at: :desc)
      .first
      .try(:profile)
  end

  def store_data
    query_attributes = []
    query_attributes << 'cpu_information LIKE :cpu_info' if params[:cpu_info]
    query_attributes << 'gpu_information LIKE :gpu_info' if params[:gpu_info]
    query_attributes << 'time_drift LIKE :time_drift' if params[:time_drift]

    fingerprint =
      Fingerprint
      .where(
        query_attributes.join(' AND '),
        cpu_info: params[:cpu_info],
        gpu_info: params[:gpu_info],
        time_drift: params[:time_drift]
      )
      .first

    if fingerprint
      fingerprint.update(profile: profile)
    else
      Fingerprint.create(
        cpu_information: params[:cpu_info],
        gpu_information: params[:gpu_info],
        time_drift: params[:time_drift],
        profile: profile
      )
    end
  end

  def response
    {
      identifier: profile.id
    }
  end
end
