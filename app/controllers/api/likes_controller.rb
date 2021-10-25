class Api::LikesController < ApplicationController
    
  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find(params[:id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: {message: "Like deleted!"}
  end

  private
  
  def like_params
    params.require(:like).permit(:track_id, :liker_id)
  end
    
end
