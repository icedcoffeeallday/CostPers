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
    @items = @user.items.where(star:nil ).sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end

    @starred = @user.items.where(star:true).sort do |x,y|
      y.cost_per[:costper] <=> x.cost_per[:costper]
    end
    render json: { non_starred: @items.as_json, starred: @starred.as_json}.to_json
  end

  def show
    @item = Item.find_by(id: params[:id])

    render json: @item.as_json
  end

end
