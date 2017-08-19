class Item < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :uses

  validates :name, :price, :user_id, presence: true

end
