class Api::UsersController < ApplicationController
    
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def get_by_email
    @user = User.where(email: params[:email])
    render json: @user
    # render 'api/users/show'
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :email, :username)
  end
    
end
