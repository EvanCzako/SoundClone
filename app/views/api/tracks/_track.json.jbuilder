json.extract! track, :id, :title, :description, :song, :uploader, :photo
json.songUrl url_for(track.song)
json.photoUrl url_for(track.photo)