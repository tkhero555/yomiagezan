Rails.application.routes.draw do
    root "static_pages#index"
    get 'caluculation', to: 'caluculations#index'
    post 'caluculation', to: 'caluculations#answer'
    get 'result', to: 'caluculations#result'
end
