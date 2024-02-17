class RegistrationsController < Devise::RegistrationsController
  include JwtHelper

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: { user: resource, token: generate_jwt_token(resource) }
    else
      render json: { error: resource.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def generate_jwt_token(user)
    payload = { user_id: user.id,  auth_date: Time.now.to_i}
    encode_token(payload)
  end
end
