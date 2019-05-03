class CreatePromos < ActiveRecord::Migration[5.2]
  def change
    create_table :promos do |t|
      t.references :bar
      t.string :name
      t.text :detail
      t.time :from
      t.time :till
      t.timestamps
    end
  end
end
