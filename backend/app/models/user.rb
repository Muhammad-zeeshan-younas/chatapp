# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User

  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  mount_uploader :avatar, ImageUploader

  has_many :messages, dependent: :destroy
  has_many :channel_memberships, dependent: :destroy
  has_many :channels, through: :channel_memberships

  after_create :create_channels_with_other_users

  private

  def create_channels_with_other_users
    User.where.not(id: id).each do |other_user|
      channel = Channel.create
      channel.users << self
      channel.users << other_user
    end
  end
end
