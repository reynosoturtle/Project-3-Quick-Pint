Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' } do
    get "/users/sign_out" => "devise/sessions#destroy"
  end
  # devise_for :users, controllers: { registrations: 'users/registrations' }
  resources :bars
  root to: "bars#index"

  get '/create/confirm' => 'bars#create_confirm'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end