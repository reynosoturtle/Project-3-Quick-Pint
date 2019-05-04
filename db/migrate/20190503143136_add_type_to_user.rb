class AddTypeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role, :string
    add_column :users, :name, :string
  end
end
