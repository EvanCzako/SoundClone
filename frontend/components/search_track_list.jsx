import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrackById, deleteTrack } from '../actions/track_actions';
import Music from './music';

class SearchTrackList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let searchPageTracks = null;

        if (Object.values(this.props.tracks).length != 0) {

            searchPageTracks = this.props.searchTracks.map((searchTrack) => {
                if (this.props.tracks[searchTrack.id] != undefined) {
                    let searchPageTrack = this.props.tracks[searchTrack.id];

                    let editButton = null;
                    let deleteButton = null;
                    if (searchPageTrack.uploader.id === this.props.session.id) {
                        editButton = <Link to={`/tracks/${searchPageTrack.id}/edit`} className="stream-edit-track-button">Edit Track</Link>
                        deleteButton = <button className="stream-delete-track-button" onClick={() => this.props.deleteTrack(searchPageTrack.id)}>Delete track</button>
                    }

                    return <div className="track-display" key={searchPageTrack.id}>
                        <Link to={`/tracks/${searchPageTrack.id}`}><img src={searchPageTrack.photoUrl} alt="Album art" /></Link>
                        <Link to={`/users/${searchPageTrack.uploader.id}`} className="stream-user-link">{searchPageTrack.uploader.username}</Link>
                        <Link to={`/tracks/${searchPageTrack.id}`} className="stream-track-link">{searchPageTrack.title}</Link>
                        <Music track={searchPageTrack} />
                        {editButton}
                        {deleteButton}
                    </div>

                } else {
                    this.props.fetchTrackById(searchTrack.id);
                    return null;
                }

            });
        }


        return (
            <div id="user-tracklist-main-content">
                <div id="user-tracklist">
                    <ul>
                        {searchPageTracks}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrackList);