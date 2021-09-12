import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            nextState[action.track.id]=action.track;
            return nextState;
        default:
            return oldState;
    }
}

export default tracksReducer;