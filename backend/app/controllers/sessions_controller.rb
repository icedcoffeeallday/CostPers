class SessionsController < ApplicationController
  protect_from_forgery with: :null_session

  def new
  end

  def create
    p params
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: {
        user_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        auth: true
      }
    else
      render json: {
        user_id: null,
        errors: ["Incorrect email or password combination."],
        auth: false
      }.to_json
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
