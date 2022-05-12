class Api::RunsController < ApplicationController
    
    def index 
        
        if user 
            render json: user.runs.all 
        else
            render json: {error: ["Not authorized"]}, status: :unauthorized 
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

    def update 
        run = user.runs.find_by(id: params[:id])
        if run 
            run.update(run_params)
            render json: run, status: :accepted
        else
            render json: {error: "Not found"}, status: :not_found 
        end 
    end
    
    def destroy  
        run = user.runs.find_by(id: params[:id])
        if run 
            run.destroy
            render json: {success: "Run deleted"} 
        else
            render json: {error: "Run not found."}, status: :not_found 
        end
    end
    
    def fastestMile
        run = user.runs.minimum(:fastest_split)
        if run 
            
            render json: run, status: :ok 
        else 
            render json: {error: ["Enter some run data to find your fastest mile so far."]}, status: :not_found 
        end
    end

    private 
    def user 
        User.find_by(id: session[:user_id])
    end

    def run_params 
        params.require(:run).permit(:date, :distance, :total_time, :calories, :elevation, :average_heartrate, :average_pace, :fastest_split, :favorite, :user_id)
    end

end
