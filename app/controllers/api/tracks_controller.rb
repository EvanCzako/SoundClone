class Api::TracksController < ApplicationController
    
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    # puts track_params
    @track = Track.new(track_params)
    @track.uploader = current_user
    @track.uploader_id = current_user.id
    if @track.save
      render json: {message: "Track saved!"}
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: {message: "Track deleted!"}
  end

  private
  
  def track_params
    puts '----------'
    # puts params
    params.require(:track).permit(:title, :description, :song)
  end
    
end
