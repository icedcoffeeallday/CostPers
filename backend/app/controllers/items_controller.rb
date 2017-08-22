class ItemsController < ApplicationController

  def index

    @user = User.find_by(id: params[:user_id])
    @items = @user.items.sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end

    render json: @items.as_json
  end

  def show
  end
  

end
