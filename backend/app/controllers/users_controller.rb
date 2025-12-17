class UsersController < ApplicationController
  def create
  user = User.new(user_params)
  if user.save
    # Only send back the ID, username, and email. NEVER the digest.
    render json: { 
      message: "User created successfully", 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email 
      } 
    }, status: :created
  else
    render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  end
end

  private

  def user_params
    # Note: password and password_confirmation are handled by has_secure_password
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
