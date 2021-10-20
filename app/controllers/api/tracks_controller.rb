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
    puts track_params
    @track = Track.new(track_params)
    @track.uploader = current_user
    @track.uploader_id = current_user.id
    if @track.save
      render json: {message: "Track saved!"}
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    puts params
    @track = Track.find_by(id: params[:id])
    if @track.update(track_params)
      render json: {message: "Track info updated!"}
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: {message: "Track deleted!"}
  end

  def get_by_string
    @tracks = Track.where("LOWER(title) LIKE '%#{params[:searchString].downcase}%'")
    render :index
  end

  private
  
  def track_params
    params.require(:track).permit(:title, :description, :song, :photo)
  end
    
end
