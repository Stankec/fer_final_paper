class ApiController < ApplicationController
  def create
    @type = params[:type]

    response_hash =
      if @type == 'server'
        process_server_query
      else
        process_client_query
      end

    render json: response_hash
  end

  private

  def process_server_query
    ServerQueryProcessor.new(params).call
  end

  def process_client_query
    ClientQueryProcessor.new(params).call
  end
end
