import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLike, deleteLike } from '../actions/like_actions';
import { createLike } from '../util/likes_api_util';
import { fetchTrackById } from '../actions/track_actions';

class LikeSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
        this.handleLikeResponse = this.handleLikeResponse.bind(this);
    }

    handleLike() {
        createLike({
            liker_id: this.props.session.id,
            track_id: parseInt(this.props.track.id),
        })
            .then((response) => this.handleLikeResponse(response, true),
                (response) => this.handleLikeResponse(response.responseJSON, false));
    }

    handleLikeResponse(response, success) {
        if (success) {
            this.props.fetchLike(response.id);
            this.props.fetchTrackById(this.props.track.id);
        } else {
            //How'd you get THIS to happen?
        }
    }

    handleUnlike(likeId) {
        this.props.deleteLike(likeId);
        this.props.fetchTrackById(this.props.track.id);
    }

    render() {
        let likeButton = null;
        if(this.props.session.id){
            likeButton = <button id="like-button" onClick={this.handleLike}>Like</button>
            for (let i = 0; i < this.props.track.likes.length; i++) {
                if(this.props.track.likes[i].liker_id === this.props.session.id){
                    likeButton = <button id="like-button" onClick={() => this.handleUnlike(this.props.track.likes[i].id)}>Unlike</button>
                }
            }
        }

        return (
            <div id="like-section-wrapper">
                <h2 id="likes-count">Likes: {this.props.track.likes.length}</h2>
                {likeButton}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        likes: state.entities.likes,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLike: (likeId) => dispatch(fetchLike(likeId)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeSection);