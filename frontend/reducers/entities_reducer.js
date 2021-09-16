import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import pageUserReducer from "./page_user_reducer";
import tracksReducer from "./tracks_reducer";
import currentTrackReducer from "./current_track_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    pageUser: pageUserReducer,
    tracks: tracksReducer,
    currentTrack: currentTrackReducer
    
})

export default entitiesReducer;