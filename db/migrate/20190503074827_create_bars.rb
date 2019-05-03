class CreateBars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
      t.string :name
      t.time :opening_hour
      t.time :closing_hour
      t.string :image
      t.string :address
      t.string :category

      t.timestamps
    end
  end
end
