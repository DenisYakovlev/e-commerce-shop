class OrderDescriptionsController < ApplicationController
  before_action :authorize_user
  before_action :require_admin_permissions
  before_action :set_order_description, only: %i[ show destroy ]

  # GET /order_descriptions
  def index
    @order_descriptions = OrderDescription.all

    render json: @order_descriptions
  end

  # GET /order_descriptions/1
  def show
    render json: @order_description
  end

  # DELETE /order_descriptions/1
  def destroy
    @order_description.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_description
      @order_description = OrderDescription.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_description_params
      params.require(:order_description).permit(:order_id, :item_id, :quantity)
    end
end
