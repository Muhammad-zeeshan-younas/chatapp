module Api::V1::Overrides
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    protected

    def provider
      'email'
    end

    def render_create_error
      raise ApiException::UserError::UserAlreadyExists if @resource.nil?
    end

    def render_update_success
      render json: { user: UserBlueprint.render_as_json(@resource) }, status: :ok
    end
  end
end
