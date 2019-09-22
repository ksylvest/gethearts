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

module Sass
  module Assets
    module Helpers
      def asset(source)
        Sass::Script::String.new("url(#{::Assets.path(source.value)})")
      end
    end
  end
end

module Sass
  module Script
    module Functions
      include Sass::Assets::Helpers
    end
  end
end
