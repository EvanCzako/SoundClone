import { RECEIVE_ALL_TRACKS, RECEIVE_SEARCH_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            let tracksArray = action.tracks;
            let tracksObject = tracksArray.reduce(function (map, obj) {
                map[obj.id] = obj;
                return map;
            }, {});
            return tracksObject;
        case RECEIVE_SEARCH_TRACKS:
            tracksArray = action.tracks;
            tracksObject = tracksArray.reduce(function (map, obj) {
                map[obj.id] = obj;
                return map;
            }, {});
            return tracksObject;
        case RECEIVE_TRACK:
            nextState[action.track.id]=action.track;
            return nextState;
        case REMOVE_TRACK:
            delete nextState[action.trackId];
            return nextState;
        default:
            return oldState;
    }
}

export default tracksReducer;