Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create, :update] do 
      collection do
        get 'get_by_email'
        get 'get_by_id'
      end
    end
    
    resources :tracks, only: [:index, :show, :create, :update, :destroy] do
      collection do
        get 'get_by_string'
      end
    end

    resources :comments, only: [:index, :show, :create, :update, :destroy]

    resources :likes, only: [:index, :show, :create, :destroy]

    resource :session, only: [:new, :create, :destroy]
  end

end