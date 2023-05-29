class MessageBlueprint < Blueprinter::Base
  identifier :id

  fields :content, :created_at, :updated_at

  association :user, blueprint: UserBlueprint
   field :channel do |channel|
    {
      id: channel.channel.id
    }
  end
end