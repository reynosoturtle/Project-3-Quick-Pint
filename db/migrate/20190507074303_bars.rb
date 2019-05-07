class Bars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
     t.string :name
     t.datetime :opening_hour, default: "", null: true
     t.datetime :closing_hour, default: "", null: true
     t.text :image, default: "", null: true
     t.string :address
     t.string :category

     t.timestamps
   end
  end
end
