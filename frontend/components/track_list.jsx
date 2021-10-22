import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTracks, deleteTrack } from '../actions/track_actions';
import Music from './music';
import RightBar from './right_bar';

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

            return <li className="track-display" key={track.id}>
                <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt="Album art" /></Link>
                <Link to={`/users/${track.uploader.id}`} className="stream-user-link">{track.uploader.username}</Link>
                <Link to={`/tracks/${track.id}`} className="stream-track-link">{track.title}</Link>
                <Music track={track}/>
                {editButton}
                {deleteButton}
            </li>

        });

        return (
            <div id="tracklist-main-content">
                <RightBar/>
                <h1>Hear the latest posts from the SoundClone community:</h1>
                <div id="stream-white-background"></div>
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
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);