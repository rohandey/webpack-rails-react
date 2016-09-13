Rails.application.routes.draw do

  namespace :api do
    resources :posts
  end

  root 'application#index'
  get "/*path" => "application#index"


end
