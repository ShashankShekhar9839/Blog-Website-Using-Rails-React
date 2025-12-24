class User < ApplicationRecord
  has_secure_password # For bcrypt password encryption
  
  has_many :posts, dependent: :destroy # Connects users to their posts
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
