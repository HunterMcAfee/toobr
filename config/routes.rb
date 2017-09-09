Rails.application.routes.draw do
  namespace :api do
    resources :movie_lists do
      resources :movies
    end
  end
end
