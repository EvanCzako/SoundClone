import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrackById, deleteTrack } from '../actions/track_actions';
import Music from './music';

class UserTrackList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        for (let i = 0; i < this.props.userTracks.length; i++) {
            this.props.fetchTrackById(this.props.userTracks[i].id);
        }
    }

    loadUserTracks() {
        for (let i = 0; i < this.props.userTracks.length; i++) {
            this.props.fetchTrackById(this.props.userTracks[i].id);
        }
    }

    render() {

        let userPageTracks = null;

        if(Object.values(this.props.tracks).length != 0 ){

            userPageTracks = this.props.userTracks.map((userTrack) => {
                if(this.props.tracks[userTrack.id]!=undefined){
                    let userPageTrack = this.props.tracks[userTrack.id];

                    let editButton = null;
                    let deleteButton = null;
                    if (userPageTrack.uploader.id === this.props.session.id) {
                        editButton = <Link to={`/tracks/${userPageTrack.id}/edit`} className="stream-edit-track-button">Edit Track</Link>
                        deleteButton = <button className="stream-delete-track-button" onClick={() => this.props.deleteTrack(userPageTrack.id)}>Delete track</button>
                    }

                    return <div className="track-display" key={userPageTrack.id}>
                        <Link to={`/tracks/${userPageTrack.id}`}><img src={userPageTrack.photoUrl} alt="Album art" /></Link>
                        <Link to={`/users/${userPageTrack.uploader.id}`} className="stream-user-link">{userPageTrack.uploader.username}</Link>
                        <Link to={`/tracks/${userPageTrack.id}`} className="stream-track-link">{userPageTrack.title}</Link>
                        <Music track={userPageTrack} />
                        {editButton}
                        {deleteButton}
                    </div>

                } else {
                    this.props.fetchTrackById(userTrack.id);
                    return null;
                }

            });
        }


        return (
            <div id="user-tracklist-main-content">
                <div id="user-tracklist">
                    <ul>
                        {userPageTracks}
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        session: state.session,
        tracks: state.entities.tracks,
        pageUser: state.entities.pageUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTrackList);