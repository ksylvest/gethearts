require 'bundler'
Bundler.require :default

require './assets'

configure do
  set :server, :puma
  set :cache, 86_400
  set :to, 'info@gethearts.com'
  set :from, 'info@gethearts.com'
  set :download, 'http://itunes.apple.com/us/app/hearts-cards/id426141277?mt=12&ls=1'
end

helpers do
  def asset(source)
    Assets.path(source)
  end

  def url(path)
    "#{request.scheme}://#{request.host}#{path}"
  end
end

get '/' do
  expires settings.cache, :public
  slim :index
end

get '/about' do
  expires settings.cache, :public
  slim :about
end

get '/features' do
  expires settings.cache, :public
  slim :features
end

get '/press' do
  expires settings.cache, :public
  slim :press
end

get '/social' do
  expires settings.cache, :public
  slim :social
end

get '/download' do
  expires settings.cache, :public
  redirect settings.download
end
