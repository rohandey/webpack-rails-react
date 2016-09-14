Rails.application.routes.draw do

  namespace :api do
    resources :posts

    resources :users

    get 'signin' => 'session#new'
    get 'signout' => 'session#destroy'
  end

  root 'application#index'
  get "/*path" => "application#index"


end
