json.extract! user, :id, :email, :username, :uploaded_tracks, :profile_photo
if user.profile_photo.present?
  json.profileImageUrl url_for(user.profile_photo)
end