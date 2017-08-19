class User < ApplicationRecord
  has_many :items
  has_many :uses, through: :items
  has_many :categories, through: :items
  
  has_secure_password
end
