class User < ApplicationRecord
    has_many :runs 
    has_secure_password
    validates :username, presence: true, uniqueness: true
     

    def favoriteRuns 
        runs = user.runs.where(favorite: true)
        
    end 
end
