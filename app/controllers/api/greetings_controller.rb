class Api::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').limit(1).first
    if @greeting
      render json: @greeting
    else
      render json: { error: 'No greeting found' }, status: 404
    end
  end
end
