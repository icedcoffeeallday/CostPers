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
    @items = Item.all
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

  # private
  # def item_params
  #   params.require(:item).permit(:name, :price)
  # end

end
