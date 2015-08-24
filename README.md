[![Circle CI](https://circleci.com/gh/jd-gray/yelp-googlemaps.svg?style=svg)](https://circleci.com/gh/jd-gray/yelp-googlemaps)
[![Code Climate](https://codeclimate.com/github/jd-gray/yelp-googlemaps/badges/gpa.svg)](https://codeclimate.com/github/jd-gray/yelp-googlemaps)


### Yelp Search with Google Maps

https://yelp-google.herokuapp.com/

#####To use Yelp in your search
Visit to create API keys: https://www.yelp.com/developers

Add to your Gemfile
```
gem 'yelp', require: 'yelp'
``` 
Or Install
```
gem install yelp
```

Create a new initializer for the ENV variables- config/initializers/yelp.rb
```
require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = ENV['YELP_CONSUMER_KEY']
  config.consumer_secret = ENV['YELP_CONSUMER_SECRET']
  config.token = ENV['YELP_TOKEN']
  config.token_secret = ENV['YELP_TOKEN_SECRET']
end
```

Pass parameters into the API to search whatever your heart desires
```
def search
  parameters = { term: params[:term], limit: 18 }
  @response = Yelp.client.search(params[:city], parameters)
end
```
