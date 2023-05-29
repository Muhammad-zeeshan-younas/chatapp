class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ExceptionHelper
  include ActiveStorage::SetCurrent

  skip_before_action :verify_authenticity_token

  before_action :configure_permitted_parameters, if: :devise_controller?

  rescue_from ApiException::BaseException, with: :handle_expected_exception

  def handle_expected_exception(exception)
    render_error_response(exception)
  end

  def append_info_to_payload(payload)
    super
    payload[:host] = request.host
    payload[:remote_ip] = request.remote_ip
    payload[:ip] = request.ip
    payload[:response_data] = response.body
  end

  def require_params!(*fields)
    fields.each do |field|
      raise ApiException::GenericError::MissingField, field if request[field].blank?
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :uid, :first_name, :last_name, :avatar])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :uid, :first_name, :last_name, :avatar])
  end
end
