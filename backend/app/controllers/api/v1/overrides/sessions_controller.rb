require_dependency Rails.root.join('app/serializers/user_blueprint')

module Api::V1::Overrides
  class SessionsController < DeviseTokenAuth::SessionsController
    protected

    def render_create_error_bad_credentials
      raise ApiException::UserError::UserNotAuthenticated
    end

    def render_create_success
      render json: { user: UserBlueprint.render_as_json(@resource) }, status: :ok
    end

    def provider
      "email"
    end
  end
end
