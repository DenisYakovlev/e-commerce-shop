require 'jwt'

module JwtHelper
  @@secret_key = ENV['JWT_SECRET']

  def encode_token(payload)
    puts @@secret_key
    JWT.encode(payload, @@secret_key)
  end

  def decode_token(token)
    begin
      JWT.decode(token, @@secret_key, true, algorithm: 'HS256')[0]
    rescue => e
      raise 'Invalid token'
    end
  end

end