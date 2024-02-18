Rails.application.routes.draw do
  devise_for :users, path: 'auth', path_names: {
    sign_in: 'sign_in',
    sign_up: 'sign_up'
  }, controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, param: :email, constraints: { email: /[^\/]+/ }, only: %i[index show update destroy]

  resources :items

  resources :order_descriptions, only: %i[index show destroy]
  resources :orders, only: %i[index show create destroy]

  scope :profile do 
    get '/', to: "profile#index"
    patch '/', to: "profile#update"
    get '/orders', to: "profile#orders"
    get '/orders/:order_id', to: "profile#show_order"
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
