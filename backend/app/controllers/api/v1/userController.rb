class Api::V1::UserController < ApplicationController
  def index
    raise ApiException::UserError::UserAlreadyExists unless current_api_v1_user

    render json: { user: UserBlueprint.render_as_json(current_api_v1_user) }, status: :ok if current_api_v1_user
  end

  def upload_avatar
    remove_old_avatar unless current_api_v1_user&.avatar&.file&.nil?
    current_api_v1_user.avatar = params[:avatar]
    render json: { user: UserBlueprint.render_as_json(current_api_v1_user) }, status: :ok if current_api_v1_user.save!
  end

  private

  def remove_old_avatar
    current_api_v1_user.remove_avatar!
  end
end
