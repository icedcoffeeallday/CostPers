Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :items do
    resources :uses
  end

  resources :users do 
    resources :items 
  end

  resources :catergories
  resources :uses
  resources :users # narrow this down to necessary routes

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  # get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy'

  root 'items#index'
end
