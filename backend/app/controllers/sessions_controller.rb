class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      render json: {
        user_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        auth: true
      }.to_json
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
