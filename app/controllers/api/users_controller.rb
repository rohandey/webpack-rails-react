class Api::UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def create
    @user = User.new(permitted_user_params)
    if @user.save
      render json: @user
    else
      render :json => { :errors => @user.errors.full_messages }, :status => 422
    end
  end


  protected

  def permitted_user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
