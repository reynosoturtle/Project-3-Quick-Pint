class AddOwnerToBars < ActiveRecord::Migration[5.2]
  def change
    add_column :bars, :owner_id, :integer
    add_index :bars, :owner_id
  end
end
