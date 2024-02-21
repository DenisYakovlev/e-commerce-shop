class ChangeOrderDescriptionsItemIdNullable < ActiveRecord::Migration[7.1]
  def change
    change_column :order_descriptions, :item_id, :bigint, null: true
  end
end
