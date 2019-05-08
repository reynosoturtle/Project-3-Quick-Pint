class AddOwnerToBars < ActiveRecord::Migration[5.2]
  def change
    add_reference :bars, :owner, references: :users, index: true
    add_foreign_key :bars, :users, column: :owner_id
  end
end
