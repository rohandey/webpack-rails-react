class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  def index
      @location_path = "/#{params[:path]}"
  end

end
