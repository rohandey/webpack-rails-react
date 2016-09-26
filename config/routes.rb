Rails.application.routes.draw do

  namespace :api do
    resources :posts

    resources :users

    post 'signin' => 'session#new'
    get 'signout' => 'session#destroy'
    post 'authenticate' => 'session#authenticate'
  end

  root 'application#index'
  get "/*path" => "application#index"


end
