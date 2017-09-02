class ItemsController < ApplicationController
  def index
    @user = User.find_by(id: params[:user_id])
    if @user == nil
      render json: "you have to be logged in for that!"
    else
      @items = @user.items.where(star:false).sort do |x,y|
        x.cost_per[:costper] <=> y.cost_per[:costper]
      end

      @starred = @user.items.where(star:true).sort do |x,y|
        x.cost_per[:costper] <=> y.cost_per[:costper]
      end
      render json: { non_starred: @items.as_json, starred: @starred.as_json}.to_json
    end
  end

  def new
  end

  def create
    @user = User.find(params[:user_id])
    @item = @user.items.new(name: params[:name], price: params[:price], star: false)
    if @item.save
      @item.uses.create
    end
    render json: @item.as_json
  end


  def show
    @item = Item.find_by(id: params[:id])

    render json: @item.as_json
  end

  def update
    @item = Item.find_by(id: params[:id])

    if @item
      if params[:star] == true
        @item.star = false
        @item.save

        render json: @item.as_json
      else
        @item.star = true
        @item.save

        render json: @item.as_json
      end

    end
  end

end
