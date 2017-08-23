class ItemsController < ApplicationController
  def new
  end

  def create
   p params
   @user = User.find(params[:user_id])
   @item = @user.items.create(name: params[:name], price: params[:price], category_id: 1)
   render json: @item
  end

  def index

    @user = User.find_by(id: params[:user_id])
    @items = @user.items.sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end

    render json: @items.as_json
  end

  def show
    @item = Item.find_by(id: params[:id])
    used_times = @item.uses.count

    render json: @item.as_json
  end


end
