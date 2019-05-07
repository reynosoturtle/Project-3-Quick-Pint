class Category < ApplicationRecord
  has_many :bar
  has_and_belongs_to_many :users
end