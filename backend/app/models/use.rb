class Use < ApplicationRecord
  belongs_to :item

  validates :item_id, presence: true
end
