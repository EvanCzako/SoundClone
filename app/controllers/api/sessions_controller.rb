class Api::SessionsController < ApplicationController
    
    before_action :ensure_logged_in, only: [:destroy]

    def create
        if logged_in?
            render json: ["Already logged in"], status: 420
        else
            @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
            if @user.nil?
                render json: ['Invalid username/password combination'], status: 401
            else
                login_user!(@user)
                render 'api/users/show'
            end
        end
    end

    def destroy
        logout_user!
        render json: {}
    end

end
