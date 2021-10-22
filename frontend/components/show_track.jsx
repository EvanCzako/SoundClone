import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrackById, deleteTrack } from '../actions/track_actions';
import Music from './music';
import CommentForm from './comment_form';
import CommentList from './comment_list';
import RightBar from './right_bar';

class ShowTrack extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrackById(this.props.trackId);
    }

    render() {
        let trackDisplay = null;
        let commentList = null;
        let commentForm = null;
        if(this.props.tracks[this.props.trackId] != undefined){
            let track = this.props.tracks[this.props.trackId];
            let editButton = null;
            let deleteButton = null;
            if (track.uploader.id === this.props.session.id) {
                editButton = <Link to={`/tracks/${track.id}/edit`} className="stream-edit-track-button">Edit Track</Link>
                deleteButton = <button className="stream-delete-track-button" onClick={() => this.props.deleteTrack(track.id)}>Delete track</button>
            }
            trackDisplay = <li className="track-display" key={track.id}>
                <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt="Album art" /></Link>
                <Link to={`/users/${track.uploader.id}`} className="stream-user-link">{track.uploader.username}</Link>
                <Link to={`/tracks/${track.id}`} className="stream-track-link">{track.title}</Link>
                <Music track={track} />
                {editButton}
                {deleteButton}
            </li>
            if (this.props.session.id) {
                commentForm = <CommentForm track={track} trackId={this.props.trackId} />;
            }
            commentList = <CommentList track={track} trackComments={track.comments}/>;
        }

        return (
            <div id="tracklist-main-content">
                <div id="track-page-white-background"></div>
                <RightBar/>
                <div id="main-tracklist">
                    {trackDisplay}
                </div>
                
                {commentForm}
                <h1 id="comments-title">Comments:</h1>
                {commentList}
                
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        trackId: ownProps.match.params.trackId,
        session: state.session,
        tracks: state.entities.tracks,
        comments: state.entities.comments 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrack);