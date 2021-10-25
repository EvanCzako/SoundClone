json.extract! track, :id, :title, :description, :song, :uploader, :photo, :comments, :likes
json.songUrl url_for(track.song)
json.photoUrl url_for(track.photo)