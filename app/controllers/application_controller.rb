class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :not_found 
  before_action :confirm_authentication 

  private 
  def current_user 
    @current_user ||= User.find_by(id: session[:user_id])
    render json: {errors: "Not authorized"}, status: :unauthorized unless @current_user
  end

  def confirm_authentication 
    render json: {error: "You must be logged in to access that information."}, status: :unauthorized unless session.include? :user_id
  end

  def not_found(error)
    render json: {error: error.message}, status: :not_found 
  end
end
