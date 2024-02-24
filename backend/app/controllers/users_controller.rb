class UsersController < ApplicationController
  before_action :authorize_user
  before_action :require_admin_permissions, only: %i[ index show update destroy]

  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all.order(:email)
    render json: @users
  end

  # GET /users/user@mail.com
  def show
    render json: @user
  end

  # PATCH/PUT /users/user@mail.com
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/user@mail.com
  def destroy
    @user.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      begin
        @user = User.find_by(email: params[:email])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'User not found' }, status: :not_found
      end
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :role)
    end
end
