Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/overrides/registrations",
        sessions: "api/v1/overrides/sessions",
      }
      resources :user, only: [:index]
      resources :channels, only: [:index]
      resources :channels do
        resources :messages, only: [:create, :destroy]
      end
    end
  end
end
