class DropPromotions < ActiveRecord::Migration[5.2]
  def change
    drop_table :promotions
  end
end
