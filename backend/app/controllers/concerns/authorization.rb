module Authorization
  extend ActiveSupport::Concern
  include JwtHelper

  @@token_prexif = 'Token'

  def authorize_user
    token = extract_token_from_headers

    begin
      decoded_payload = decode_token(token)
      @curent_user = User.find_by(id: decoded_payload['user_id']) if decoded_payload
    rescue => e
      render_unauthorized(e)
    end
  end

  private

  def extract_token_from_headers
    header = request.headers['Authorization']
    return nil unless header.present?

    prefix, token = header.split(' ')
    return nil unless prefix == @@token_prexif && token.present?

    token
  end

  def render_unauthorized(msg)
    render json: { error: msg }, status: :unauthorized
  end
end