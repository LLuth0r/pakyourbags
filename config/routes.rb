Rails.application.routes.draw do
  resources :trip_dates
  resources :activities
  resources :hotels
  resources :flights
  resources :budgets
  resources :photos
  resources :users
  resources :trips
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
