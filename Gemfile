source 'https://rubygems.org'

ruby '2.2.2'

gem 'rails', '4.2.1'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'figaro'
gem 'yelp', require: 'yelp'
gem 'bootstrap-sass', '~> 3.3.5'
gem 'haml-rails', '~> 0.9'
gem 'masonry-rails'
gem 'gon', '~> 6.0.1'

group :development, :test do
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'pry', '~> 0.10.1'
  gem 'pry-rails'
  gem 'rspec-rails'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
  gem "codeclimate-test-reporter", require: nil
  gem 'webmock'
  gem 'vcr', '~> 3.0', '>= 3.0.1'
end

group :development do
  gem 'sqlite3'
end

group :production do
  gem 'rails_12factor'
  gem 'pg'
end