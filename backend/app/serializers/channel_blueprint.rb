class ChannelBlueprint < Blueprinter::Base
  identifier :id
  association :messages, blueprint: MessageBlueprint
  association :users, blueprint: UserBlueprint
end