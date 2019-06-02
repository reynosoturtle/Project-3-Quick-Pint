class Bars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
     t.string :name
     t.text :image, default: "", null: true
     t.string :address
     t.string :business_hours
     t.string "place_id"
    t.decimal "lat", precision: 10, scale: 6
    t.decimal "long", precision: 10, scale: 6
    t.decimal "avg_price"
    # t.bigint "owner_id"


     t.timestamps
   end
  end
end
    # t.string "name"
    # t.text "image", default: ""
    # t.string "address"
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.bigint "owner_id"
    # t.text "business_hours", default: [], array: true
    # t.string "place_id"
    # t.decimal "lat", precision: 10, scale: 6
    # t.decimal "long", precision: 10, scale: 6
    # t.decimal "avg_price"
    # t.index ["owner_id"], name: "index_bars_on_owner_id"