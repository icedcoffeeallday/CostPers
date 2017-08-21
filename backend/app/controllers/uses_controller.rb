class UsesController < ApplicationController
  def index
    # @item = Item.find_by(params[:id])
    # @uses = @item.uses
    @uses = Use.all
    render json: @uses
  end

  def new
    @item = Item.new
  end

  def create
    p params
    @item = Item.find(params[:item_id])
    @use = @item.uses.create(item_id: @item.id)
    render json: {created: true}.to_json
  end


end
