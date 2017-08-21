class ItemsController < ApplicationController

  def index
    @items = Item.all
    @testitem = []

      @items.each do |item|
        newcostper = (item.price / item.uses.count).round
        itemcp = { id: item.id.to_s + item.name, costper: newcostper}
        @testitem << {:item => item, :costper => itemcp}
      end

    render json: @testitem

    # @items.map { |item|
    #   newcostper = (item.price / item.uses.count)
    #   new_elm = {}
    #   item[:costper] = newcostper

    # render json: { items: @items.map { |item|
    #   costper = (item.price / item.uses.count)
    #   item.push(costper)
    #   }}
    # render json: @items


  end


end
