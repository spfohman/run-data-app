class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def index 
        users = User.all 
        render json: users
    end
    def create 
        user  = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created 
        else 
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user 
        else
            render json: {error: ["Not authorized"]}, status: :unauthorized 
        end
    end
    def most_runs 
        user = User.most_runs
        render json: user
    end
    def most_runs_1 
        user = User.count(:run)
        render json: user
    end
    private 
    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end