class CreateBars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
      t.string :name
      t.string :business_hour
      t.string :image
      t.string :address
      t.references :type

      t.timestamps
    end
  end
end
