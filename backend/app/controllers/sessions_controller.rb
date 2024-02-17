class SessionsController < Devise::SessionsController
  include JwtHelper

  respond_to :json

  def create
    user_params = params.require(:user).permit(:email, :password)
    user = User.find_by(email: user_params[:email])

    if user && user.valid_password?(user_params[:password])
      # Authentication successful
      render json: { user: user, token: generate_jwt_token(user) }
    else
      # Authentication failed
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  private

  def respond_with(resource, _opts = {})
    if resource.errors.empty?
      render json: { user: resource, token: generate_jwt_token(resource) }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def respond_to_on_destroy
    head :no_content
  end

  def generate_jwt_token(user)
    payload = { user_id: user.id,  auth_date: Time.now.to_i}
    encode_token(payload)
  end
end
