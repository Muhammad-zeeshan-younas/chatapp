class UserBlueprint < Blueprinter::Base
  identifier :id
  
  fields :first_name, :last_name, :email
  
  field :avatar_url, name: :avatar
end