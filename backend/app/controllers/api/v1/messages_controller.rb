class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_api_v1_user!

  def create
    @channel = Channel.find(params[:channel_id])
    @message = @channel.messages.build(message_params)
    @message.user = current_api_v1_user
    if @message.save
      serialized_message = MessageBlueprint.render_as_json(@message)
  
      ActionCable.server.broadcast 'chat_channel', serialized_message
    end
  end

  def destroy
    @message = current_api_v1_user.messages.find(params[:id])
    @message.destroy
    redirect_to @message.channel, notice: 'Message deleted successfully.'
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end