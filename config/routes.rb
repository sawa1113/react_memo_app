Rails.application.routes.draw do
  namespace :api do
    resources :memos
  end
end