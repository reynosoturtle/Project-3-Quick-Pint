class AddAvgPriceToBars < ActiveRecord::Migration[5.2]
  def change
    add_column :bars, :avg_price, :decimal
  end
end
