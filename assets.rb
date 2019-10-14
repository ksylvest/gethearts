require 'sprockets'

class Assets < Sprockets::Environment
  def self.instance
    @instance ||= new
  end

  def initialize
    super
    append_path 'assets/javascripts'
    append_path 'assets/stylesheets'
    append_path 'assets/images'
  end

  def self.path(source)
    "/assets/#{instance.find_asset(source).digest_path}"
  end
end

module Sprockets::SasscProcessor::Functions
  def asset_url(source)
    ::SassC::Script::Value::String.new("url(#{::Assets.path(source.value)})")
  end
end
