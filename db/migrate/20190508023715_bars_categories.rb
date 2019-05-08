class BarsCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :bars_categories do |t|
      t.references :bar
      t.references :category

      t.timestamps
    end
  end
end
