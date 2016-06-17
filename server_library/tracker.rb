class Tracker
  attr_reader :request
  attr_reader :tracker_app_url

  def initialize(request:, tracker_app_url:)
    @request = request
    @tracker_app_url = tracker_app_url
  end

  def call
    request.headers.merge!(tracking_headers)
    identifier
  end

  private

  attr_reader :response

  def tracking_headers
    response['headers']
  end

  def identifier
    response['identifier']
  end

  def response
    @response ||= query_tracker
  end

  def query_tracker
    http = Net::HTTP.new(tracker_app_uri.host, tracker_app_uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(tracker_app_uri.path)
    request.body = {
      type: :server,
      http_headers: headers
    }
    response = http.request(request)

    JSON.parse(response.body)
  end

  def tracking_info
    {
      type: :server,
      http_headers: request.headers,
      global_ip: request.remote_ip,
      local_ip: request.ip,
      path: request.original_url
    }
  end

  def tracker_app_uri
    URI.parse(tracker_app_url)
  end
end
