json.extract! track, :id, :title, :description, :song, :uploader
json.trackUrl url_for(track.song)