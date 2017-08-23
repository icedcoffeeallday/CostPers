class ItemsController < ApplicationController
  def new
  end

  def create
    @user = User.find(params[:user_id])
    @item = @user.items.new(name: params[:name], price: params[:price])
    if @item.save
      @item.uses.create
    end
    render json: @item.as_json
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @items = @user.items.sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end
    render json: @items.as_json
  end

  def show
    @user = User.find(params[:user_id])

  end

end
