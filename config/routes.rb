Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create] do 
      collection do
        get 'get_by_email'
        get 'get_by_id'
      end
    end
    
    resources :tracks, only: [:index, :show, :create, :update, :destroy]

    resource :session, only: [:new, :create, :destroy]
  end

  # get '/api/users/:email/emails', to: 'users#get_by_email', as: 'get_by_email'
  
end