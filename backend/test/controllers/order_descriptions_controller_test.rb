require "test_helper"

class OrderDescriptionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order_description = order_descriptions(:one)
  end

  test "should get index" do
    get order_descriptions_url, as: :json
    assert_response :success
  end

  test "should create order_description" do
    assert_difference("OrderDescription.count") do
      post order_descriptions_url, params: { order_description: { item_id: @order_description.item_id, order_id: @order_description.order_id, quantity: @order_description.quantity } }, as: :json
    end

    assert_response :created
  end

  test "should show order_description" do
    get order_description_url(@order_description), as: :json
    assert_response :success
  end

  test "should update order_description" do
    patch order_description_url(@order_description), params: { order_description: { item_id: @order_description.item_id, order_id: @order_description.order_id, quantity: @order_description.quantity } }, as: :json
    assert_response :success
  end

  test "should destroy order_description" do
    assert_difference("OrderDescription.count", -1) do
      delete order_description_url(@order_description), as: :json
    end

    assert_response :no_content
  end
end
