json.array! @tracks do |track|
    json.extract! track, :id, :title, :description, :song, :photo, :uploader, :comments, :likes
    json.songUrl url_for(track.song)
    json.photoUrl url_for(track.photo)
end