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
                editButton = <Link to={`/tracks/${track.id}/edit`} className="stream-edit-track-button">Edit Track</Link>
                deleteButton = <button className="stream-delete-track-button" onClick={() => this.props.deleteTrack(track.id)}>Delete track</button>
            }

            return <div className="track-display" key={track.id}>
                <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt="Album art" /></Link>
                <Link to={`/users/${track.uploader.id}`} className="stream-user-link">{track.uploader.username}</Link>
                <Link to={`/tracks/${track.id}`} className="stream-track-link">{track.title}</Link>
                <audio controls>
                    <source src={track.songUrl} type="audio/wav" />
                </audio>
                {editButton}
                {deleteButton}
            </div>

        });

        return (
            <div id="tracklist-main-content">
                <div id="main-tracklist">
                    <ul>
                        {tracks}
                    </ul>
                </div>
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