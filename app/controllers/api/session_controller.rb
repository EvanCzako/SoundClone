class Api::SessionController < ApplicationController
    
    def create
        user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if user.nil?
            render json: ['Invalid username/password combination'], status: 401
        else
            login_user!(user)
            render 'api/users/show';
        end
    end

    def destroy
        if !current_user
            logout_user!
            render json: {}
        else
            render json: ["No user logged in"], status: 404
        end
    end

end
