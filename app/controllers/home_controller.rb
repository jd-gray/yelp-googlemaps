class HomeController < ApplicationController
  def index
    if params[:term] != nil && params[:city] != nil
      parameters = { term: params[:term], limit: 18 }
      @response = Yelp.client.search(params[:city], parameters)
      gon.yelp_hash = @response
    end
  end
end
