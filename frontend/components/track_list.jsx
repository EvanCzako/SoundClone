import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTracks, fetchTrack, deleteTrack } from '../actions/track_actions';

class TrackList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchTracks();
    }

    render() {

        let tracks = Object.values(this.props.tracks).map((track) => {
            let editButton = null;
            let deleteButton = null;
            if(track.uploader.id===this.props.session.id){
                editButton = <Link to={`/tracks/${track.id}/edit`}>Edit Track</Link>
                deleteButton = <button onClick={() => this.props.deleteTrack(track.id)}>Delete track</button>
            }

            return <div key={track.id}>
                <h1>{track.title}</h1>
                <div>{track.description}</div>
                <audio controls>
                    <source src={track.trackUrl} type="audio/wav" />
                </audio>
                {editButton}
                {deleteButton}
                
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
        tracks: state.entities.tracks,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);