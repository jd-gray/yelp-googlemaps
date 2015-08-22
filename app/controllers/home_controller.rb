class HomeController < ApplicationController
  def index
    if params[:term] != nil && params[:city] != nil
      parameters = { term: params[:term], limit: 10 }
      @response = Yelp.client.search(params[:city], parameters)
    end
  end

end
