class Item < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :uses

  validates :name, :price, :user_id, presence: true

  def cost_per
     if self.uses.count > 1
       newcostper = (self.price / self.uses.count).round
     else
       newcostper = self.price.round
     end
     newcostper
     { id: self.id.to_s + self.name, costper: newcostper, item_id: self.id}

   end

   def as_json
     {
     id: self.id,
     name: self.name,
     price: self.price,
     img_url: self.img_url,
     star: self.star,
     user_id: self.user_id,
     category_id: self.category_id,
     created_at: self.created_at,
     updated_at: self.updated_at,
     costper: self.cost_per
     }
   end

end
