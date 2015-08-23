class HomeController < ApplicationController
  def index
    begin
    if params[:term] != nil && params[:city] != nil
      parameters = { term: params[:term], limit: 18 }
      @response = Yelp.client.search(params[:city], parameters)
      gon.yelp_hash = @response
    end

    rescue
      # Error Handling
    end
  end
end
