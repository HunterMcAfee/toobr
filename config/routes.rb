Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :movie_lists do
      resources :movies
    end
  end

  namespace :api do
    resources :show_lists do
      resources :shows
    end
  end
end
