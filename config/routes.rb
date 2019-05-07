Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' } do
    get "/users/sign_out" => "devise/sessions#destroy"
  end
  # devise_for :users, controllers: { registrations: 'users/registrations' }
  resources :bars do
    get 'favorite', on: :member
    get 'unfavorite', on: :member
    #member is a ruby native syntax. A member route will require an ID, because it acts on a member
  end
  get 'favorites' => "favorites#index"
  root to: "bars#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
