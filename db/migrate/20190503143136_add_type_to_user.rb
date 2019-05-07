# frozen_string_literal: true

class AddTypeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :type, :string
    add_column :users, :name, :string
  end
end
