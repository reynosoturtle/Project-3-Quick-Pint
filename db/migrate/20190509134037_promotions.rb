class Promotions < ActiveRecord::Migration[5.2]
  def change
      create_table :promotions do |t|
      t.references :bar
      t.string :name
      t.text :detail, default: "", null: true
      t.datetime :from, default: "", null: true
      t.datetime :till, default: "", null: true
      t.timestamps
    end
  end
end
