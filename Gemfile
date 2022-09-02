# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.1.2'

gem 'puma'

gem 'sinatra'

gem 'rack'
gem 'rack-cache', require: 'rack/cache'
gem 'rack-ssl', require: 'rack/ssl'

gem 'rake'
gem 'sassc'
gem 'slim'
gem 'sprockets'
gem 'uglifier'

gem 'coffee-script'

group :development do
  gem 'rubocop'
  gem 'rubocop-rake'
  gem 'rubocop-rspec'
  gem 'simplecov', require: false
end

group :test do
  gem 'capybara'
  gem 'rspec'
end

group :production do
  gem 'newrelic_rpm'
end
