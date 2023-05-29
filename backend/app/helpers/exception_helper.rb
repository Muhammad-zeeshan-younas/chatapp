module ExceptionHelper
  def render_error_response(exception, code = 500)
    render json: { message: exception.message }, status: exception.try(:code) ? exception.code : code
  end
end
