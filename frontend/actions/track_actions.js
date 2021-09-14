import * as TracksApiUtil from '../util/tracks_api_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks: tracks
});

const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track: track
});

const removeTrack = (trackId) => {
    return {
        type: REMOVE_TRACK,
        trackId: trackId
    };
};

export const fetchTracks = () => (dispatch) => {
    return TracksApiUtil.fetchTracks()
        .then((tracks) => dispatch(receiveAllTracks(tracks)));
};

export const fetchTrack = (trackId) => (dispatch) => {
    return TracksApiUtil.fetchTrack(trackId)
        .then((track) => dispatch(receiveTrack(track)));
};

export const deleteTrack = (trackId) => (dispatch) => {
    return TracksApiUtil.deleteTrack(trackId)
        .then(() => dispatch(removeTrack(trackId)));
};