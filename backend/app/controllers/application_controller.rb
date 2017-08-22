class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  # Per Faye, protect_from_forgery needs to be removed in order for Costper button to work.

  skip_before_action :verify_authenticity_token

end
