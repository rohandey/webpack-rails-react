class Api::SessionController < ApplicationController

  def new
    user = User.where("email = ? AND password = ?", params[:email], params[:password]).first

    if user
      render json: user
    else
      render json: { error: 'Authentication failed' }, :status => 401
    end
  end


  def authenticate
    user = User.where("id = ?", params[:auth_token]).first
    if user.present?
      render json: user
    else
      render json: { error: 'Invalid user token' }
    end
  end

  def destroy
  end

end
