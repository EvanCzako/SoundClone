export const fetchTracks = () => (
    $.ajax({
        url: '/api/tracks',
        method: 'GET'
    })
);

export const fetchTrack = (trackId) => (
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: 'GET'
    })
);

export const createTrack = (track) => (
    $.ajax({
        url: `/api/tracks/`,
        method: 'POST',
        data: track,
        contentType: false,
        processData: false
    })
);

export const updateTrack = (track) => (
    $.ajax({
        url: `/api/tracks/${track.id}`,
        method: 'PATCH',
        data: {track: track}
    })
);

export const deleteTrack = (trackId) => (
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: 'DELETE'
    })
);

export const getTracksByString = (searchString) => (
    $.ajax({
        url: `/api/tracks/get_by_string?searchString=${searchString}`,
        method: 'GET'
    })
);