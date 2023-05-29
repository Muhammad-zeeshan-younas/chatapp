class Channel < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :channel_memberships, dependent: :destroy
  has_many :users, through: :channel_memberships
end
