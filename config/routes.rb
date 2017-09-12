Rails.application.routes.draw do
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
