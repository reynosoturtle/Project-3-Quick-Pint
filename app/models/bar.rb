class Bar < ApplicationRecord
  has_many :promos
  belongs_to :owner, foreign_key: "User", optional: true
end
