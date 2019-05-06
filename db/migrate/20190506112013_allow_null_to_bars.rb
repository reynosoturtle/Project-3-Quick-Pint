class AllowNullToBars < ActiveRecord::Migration[5.2]
  def change
    change_column :bars, :opening_hour, :integer, null: true
    change_column :bars, :closing_hour, :integer, null: true
    change_column :bars, :image, :text, null: true
  end
end
