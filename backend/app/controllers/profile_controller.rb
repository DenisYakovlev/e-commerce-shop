class ProfileController < ApplicationController
  before_action :authorize_user
  before_action :require_user_permissions

  # GET /profile/
  def index
    render json: @curent_user
  end

  # PATCH /profile/
  def update
    if @curent_user.update(user_params)
      render json: @curent_user
    else
      render json: @curent_user.errors, status: :unprocessable_entity
    end
  end

  # GET /profile/orders
  def orders
    orders = Order.where(user_id: @curent_user.id)
    render json: {orders: orders}
  end

  # GET /profile/orders/1
  def show_order
    begin
      order = Order.where(id: params[:order_id], user_id: @curent_user.id)
      order_descriptions = OrderDescription.where(order_id: params[:order_id])

      render json: {order: order, description: order_descriptions}
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Your order not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :role)
  end
end
