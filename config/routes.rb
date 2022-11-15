Rails.application.routes.draw do
  
  resources :cities
  resources :artists
  resources :concerts

  get 'cities/:id/concerts', :to => 'cities#show_cities'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
