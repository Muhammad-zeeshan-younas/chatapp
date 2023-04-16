class Api::V1::UserController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.as_json(only: [:id, :email, :name])
  end
end
