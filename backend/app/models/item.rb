class Item < ApplicationRecord
  belongs_to :user
  has_many :uses

  validates :name, :price, :user_id, presence: true

end
