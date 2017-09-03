class User < ApplicationRecord
  has_many :items
  has_many :uses, through: :items, dependent: :destroy

  validates :first_name, :last_name, :email, :password, presence: true
  validates :email, uniqueness: true

  has_secure_password
  has_secure_token

  def invalidate_token
    self.update_columns(token: nil)
  end

  def self.valid_login?(email, password)
    user = find_by(email: email)
    if user && user.authenticate(password)
      user
    end
  end
end
