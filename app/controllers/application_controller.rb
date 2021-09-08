class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token

  helper_method :current_user
  helper_method :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in 
    render json: ['Not logged in'], status: 420 unless logged_in? 
  end

  def logged_in?
    !current_user.nil?
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout_user!
    if logged_in?
      current_user.reset_session_token!
    end
    session[:session_token] = nil
    @current_user = nil
  end

end
