import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import pageUserReducer from "./page_user_reducer";
import tracksReducer from "./tracks_reducer";
import currentTrackReducer from "./current_track_reducer";
import commentsReducer from "./comments_reducer";
import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    pageUser: pageUserReducer,
    tracks: tracksReducer,
    currentTrack: currentTrackReducer,
    comments: commentsReducer,
    likes: likesReducer
})

export default entitiesReducer;