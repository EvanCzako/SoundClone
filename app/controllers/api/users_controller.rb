class Api::UsersController < ApplicationController
    
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id]);
    puts(user_params);
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def get_by_email
    @user = User.where(email: params[:email]).first
    puts "----------------"
    puts @user
    if @user
      render :show
    else
      render json: ["Email not in database"]
    end
  end

  def get_by_id
    @user = User.where(id: params[:id]).first
    if @user
      render :show
    else
      render json: ["User id doesn't exist"], status: 420
    end
  end


  private
  
  def user_params
    params.require(:user).permit(:password, :email, :username, :profile_photo)
  end
    
end
