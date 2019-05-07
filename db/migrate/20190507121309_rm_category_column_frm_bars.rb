class RmCategoryColumnFrmBars < ActiveRecord::Migration[5.2]
  def change
    remove_column :bars, :category
  end
end
