module Permissions
  extend ActiveSupport::Concern
  
  @@error_msg = "You don't have permissions for this aciton"

  def require_user_permissions
    if @curent_user
      render_error(@@error_msg) unless @curent_user.role == 'user' || @curent_user.role == 'admin'
    else
      render_error('Unauthorized')
    end
  end

  def require_admin_permissions
    if @curent_user
      render_error(@@error_msg) unless @curent_user.role == 'admin'
    else
      render_error('Unauthorized')
    end
  end

  private

  def render_error(msg)
    render json: { error: msg }, status: :unauthorized
  end
end