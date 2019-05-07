# frozen_string_literal: true

class Bar < ApplicationRecord
  has_many :promos
  belongs_to :owner, foreign_key: :owner_id
  acts_as_favoritable
end
