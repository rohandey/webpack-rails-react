class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def index
      @location_path = "/#{params[:path]}"
  end

end
