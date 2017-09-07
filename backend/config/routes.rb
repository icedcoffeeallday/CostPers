Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
    resources :items
  end

  resources :items do
    resources :uses
  end

  resources :catergories
  resources :uses


  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  post '/register' => 'users#create'
  # get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy'

  root 'items#index'
end
