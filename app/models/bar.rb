class Bar < ApplicationRecord
  has_many :promos
  belongs_to :owner, foreign_key: "User", optional: true
  acts_as_favoritable
end
