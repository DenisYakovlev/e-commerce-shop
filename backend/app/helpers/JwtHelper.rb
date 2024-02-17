require 'jwt'

module JwtHelper
  @@secret_key = Rails.application.credentials.jwt[:secret_key]

  def encode_token(payload)
    JWT.encode(payload, @@secret_key)
  end

  def decode_token(token)
    JWT.decode(token, @@secret_key, true, algorithm: 'HS256')[0]
  end

end