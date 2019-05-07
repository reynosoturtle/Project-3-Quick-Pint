class AddCategoriesToBars < ActiveRecord::Migration[5.2]
  def change
    add_reference :bars, :category, index: true
    add_foreign_key :bars, :categories
  end
end
