class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    @channel = Channel.find(params[:channel_id])
    @message = @channel.messages.build(message_params)
    @message.user = current_user

    if @message.save
      redirect_to @channel, notice: 'Message created successfully.'
    else
      redirect_to @channel, alert: 'Failed to create message.'
    end
  end

  def destroy
    @message = current_user.messages.find(params[:id])
    @message.destroy
    redirect_to @message.channel, notice: 'Message deleted successfully.'
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
