class ApiController < ApplicationController
  def create
    @type = params[:type]

    if @type == 'server'
      process_server_query
    else
      process_client_query
    end
  end

  private


end
