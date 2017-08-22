class ItemsController < ApplicationController
  def new
  end

  def create
    p params
    @user = User.find(params[:user_id])
    @item = @user.items.create(name: params[:name], price: params[:price])
    render json: @item.as_json
  end

  def index

    @user = User.find_by(id: params[:user_id])
    @items = @user.items.sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end




    render json: @items.as_json



  end

end
