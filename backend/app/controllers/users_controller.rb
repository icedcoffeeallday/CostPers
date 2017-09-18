class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    p '**************************'
    p params
    @user = User.create!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password])

    render json: @user
  end
end
