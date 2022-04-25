class User < ApplicationRecord
    has_many :runs 
    has_secure_password
    validates :username, presence: true, uniqueness: true
    # validates :password_digest, presence: true
    #custom route /favoriteRuns 
    #when user goes to route, get user favorite runs 
    #create custom action and custom instance method for user 
    #instance method should use active record query methods 

    def favoriteRuns 
        runs = user.runs.where(favorite: true)
        
    end 
end
