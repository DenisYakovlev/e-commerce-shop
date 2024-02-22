class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :role, inclusion: { in: %w(admin user) }
  validates :first_name, length: { minimum: 2 }
  validates :last_name, length: { minimum: 2 }

  def self.ransackable_attributes(auth_object = nil)
    %w[email]
  end

  def self.ransackable_associations(auth_object = nil)
    []
  end
end
