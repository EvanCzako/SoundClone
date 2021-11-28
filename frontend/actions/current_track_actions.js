import * as TracksApiUtil from '../util/tracks_api_util';

export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrentTrack = (track) => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        track: track
    };
}

export const fetchCurrentTrackById = (trackId) => (dispatch) => {
    return TracksApiUtil.fetchTrack(trackId)
        .then((track) => dispatch(receiveCurrentTrack(track)));
};