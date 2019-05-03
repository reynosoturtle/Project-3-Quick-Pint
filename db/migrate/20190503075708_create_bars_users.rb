class CreateBarsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :bars_users do |t|
      t.references :bar
      t.references :user

      t.timestamps
    end
  end
end
