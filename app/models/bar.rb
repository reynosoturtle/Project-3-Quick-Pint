class Bar < ApplicationRecord
  has_many :promos
  has_and_belongs_to_many :categories
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  acts_as_favoritable
end
