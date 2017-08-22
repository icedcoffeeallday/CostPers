class ItemsController < ApplicationController

  def index
    @items = Item.all
    @testitem = []

      @items.each do |item|
        newcostper = (item.price / item.uses.count).round
        itemcp = { id: item.id.to_s + item.name, costper: newcostper, item_id: item.id}
        @testitem << {:item => item, :costper => itemcp}
      end
    render json: @testitem
  end

  

end
