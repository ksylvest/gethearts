require './app.rb'

use Rack::SSL if production?

if ENV['MEMCACHE_SERVERS']
  url = "memcached://#{ENV['MEMCACHE_SERVERS']}"
  use Rack::Cache, metastore: url, entitystore: url, verbose: true
end

map '/assets' do
  run Assets.new
end

map '/' do
  run Sinatra::Application
end
