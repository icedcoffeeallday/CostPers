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
    p params 

    @user = User.find_by(id: params[:user_id])

    @items = @user.items 
    @testitem = []

    @items.each do |item|
      if item.uses.count > 1
        newcostper = (item.price / item.uses.count).round
      else
        newcostper = item.price.round
      end
        itemcp = { id: item.id.to_s + item.name, costper: newcostper, item_id: item.id}
        @testitem << {:item => item, :costper => itemcp}
    end
    render json: @testitem
  end  

end
