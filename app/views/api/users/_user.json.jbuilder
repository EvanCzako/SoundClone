json.extract! user, :id, :email, :username, :uploaded_tracks, :profile_photo
json.profileImageUrl url_for(user.profile_photo)