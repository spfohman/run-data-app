class RunsController < ApplicationController
    def index 
        
        if user 
            render json: user.runs.all 
        else
            render json: {error: "Not authorized"}, status: :unauthorized 
        end
    end
    
    def show 
        run = user.runs.find_by(id: params[:id])
        if run 
            render json: run 
        else
            render json: {error: "Not found"}, status: :unauthorized 
        end 
    end

    def create  
        run = user.runs.create(run_params)
        if run.valid? 
            render json: run, status: :created 
        else
            render json: {errors: run.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def destroy  
        run = user.runs.find_by(id: params[:id])
        if run 
            run.destroy 
        else
            render json: {error: "Run not found."}, status: :not_found 
        end
    end

    private 
    def user 
        User.find_by(id: session[:user_id])
    end

    def run_params 
        params.permit(:date, :distance, :total_time, :calories, :elevation, :average_heartrate, :average_pace, :fastest_split, :user_id)
    end

end
