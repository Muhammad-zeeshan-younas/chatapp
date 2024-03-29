Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://0.0.0.0:3000", "http://localhost:3000"
  
      resource '*',
               headers: :any,
               expose: %w[access-token expiry token-type uid client],
               methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  