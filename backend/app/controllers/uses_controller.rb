class UsesController < ApplicationController
  before_action :require_login

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
    p params
    @use = @item.uses.create(item_id: @item.id)
    @uses = @item.uses.count
    @costper = (@item.price / @uses).round(2)
    render json: @costper
  end


end
