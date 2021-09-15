import { RECEIVE_CURRENT_TRACK } from "../actions/current_track_actions";

const currentTrackReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            if(!oldState['playing'] || oldState['id']!=action.track['id']){
                return { ...action.track, playing: true };
            }else{
                return { ...action.track, playing: false };
            }
            
        default:
            return oldState;
    }
}

export default currentTrackReducer;