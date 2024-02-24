class ItemsController < ApplicationController
  before_action :authorize_user, only: %i[ create update destroy ]
  before_action :require_admin_permissions, only: %i[ create update destroy ]

  before_action :set_item, only: %i[ show update destroy ]

  # GET /items
  def index
    per_page = params[:per_page].to_i || 10

    @q = Item.ransack(params[:q])
    @items = @q.result.paginate(page: params[:page], per_page: per_page).order(:id)

    items_count = @items.total_entries
    headers['X-Total-Count'] = items_count.to_s
    pagination_page = params[:page].to_i
    render json: {
      items: @items, 
      pagination: items_paginate(pagination_page || 1, per_page, items_count )
    }
  end

  # GET /items/1
  def show
    render json: @item
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      begin
        @item = Item.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Item not found' }, status: :not_found
      end
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:name, :description, :price)
    end

    def items_paginate(page, per_page, total)
      {
        item_count: total,
        page_count: (total.to_f / per_page.to_f).ceil,
        curr_page: page, 
        next_page: page * per_page < total ? page + 1 : nil,
        prev_page: page > 1 ? page - 1 : nil,
        per_page: per_page
      }
    end
end
