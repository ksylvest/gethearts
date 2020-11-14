environment ENV['RACK_ENV'] || 'development'
port ENV['PORT'] || 3000
threads Integer(ENV.fetch('MIN_PUMA_THREADS', 4)), Integer(ENV.fetch('MAX_PUMA_THREADS', 4))
workers Integer(ENV.fetch('PUMA_WORKERS', 2))

preload_app!
