class Item < ApplicationRecord
  belongs_to :user
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

   def used_times
     self.uses.count
   end

   def as_json
     {
     id: self.id,
     name: self.name,
     price: self.price.round.to_s,
     img_url: self.img_url,
     used_times: self.used_times,
     star: self.star,
     user_id: self.user_id,
     created_at: self.created_at,
     updated_at: self.updated_at,
     costper: self.cost_per
     }
   end

end
