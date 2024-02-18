class OrdersController < ApplicationController
  before_action :authorize_user
  before_action :require_admin_permissions, only: %i[ index show destroy ]
  before_action :require_user_permissions, only: %i[ create ]

  before_action :set_order, only: %i[ show destroy ]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    order_descriptions = OrderDescription.where(order_id: @order.id)
    render json: {order: @order, description: order_descriptions}
  end

  # POST /orders
  def create
    ActiveRecord::Base.transaction do
      @order_items = Item.where(id: retrieve_item_ids)
      @order = Order.new(user_id: @curent_user.id, amount: calculate_amount)

      if @order.save
        params[:items].each do |item|
          order_description = OrderDescription.new(
            order_id: @order.id, 
            item_id: item[:item_id],
            quantity: item[:quantity]
          )

          order_description.save
        end

        render json: @order, status: :created, location: @order
      else
        render json: @order.errors, status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordInvalid => e
      render json: { error: e.message }, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    def retrieve_item_ids
      params[:items].map {|item| item[:item_id]}
    end

    def calculate_amount
      prices = @order_items.map {|item| item.price}.map(&:to_f)
      quantities = params[:items].map {|item| item[:quantity]}.map(&:to_f)

      # multiply prices and quantities and find sum of result array.
      # formula: amount = sum(prices * quantities)
      prices.zip(quantities).map {|price, quantity| price * quantity}.sum
    end
end
