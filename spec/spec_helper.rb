require 'simplecov'
SimpleCov.start
require File.join(File.dirname(__FILE__), '..', 'app.rb')
require 'capybara/rspec'

set :environment, :test

Capybara.app = Sinatra::Application
