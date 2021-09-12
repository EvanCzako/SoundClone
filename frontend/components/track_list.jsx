import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks, fetchTrack } from '../actions/track_actions';

class TrackList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchTracks();
    }

    render() {

        // console.log(...this.props.tracks);
        let tracks = Object.values(this.props.tracks).map((track) => {
            // return <li key={track.id}>{track.title}</li>
            return <div key={track.id}>
                <h1>{track.title}</h1>
                <audio controls>
                    <source src={track.trackUrl} type="audio/wav" />
                </audio>
            </div>

        });

        return (
            <div id="main-tracklist">
                <ul>TRACKS
                    {tracks}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);