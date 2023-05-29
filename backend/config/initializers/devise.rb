# frozen_string_literal: true

Devise.setup do |config|
  config.reconfirmable = false
  config.authentication_keys = [:email]
end
  