json.array! @tracks do |track|
    json.extract! track, :id, :title, :description, :song
    json.trackUrl url_for(track.song)
end