class Api::V1::ChannelsController < ApplicationController
  before_action  :authenticate_api_v1_user!
  def index
    render json: { channels: ChannelBlueprint.render_as_json(current_api_v1_user.channels) }, status: :ok
  end
end
