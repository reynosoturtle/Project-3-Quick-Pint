class Type < ActiveRecord::Migration[5.2]
  def change
    create_table :types do |t|
      t.string :name
    end
  end
end
