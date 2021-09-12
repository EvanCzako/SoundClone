export const fetchTracks = () => (
    $.ajax({
        url: '/api/tracks',
        method: 'GET',
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