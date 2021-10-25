import React from 'react';
import { connect } from 'react-redux';
import {createComment} from '../util/comments_api_util';
import {fetchComment} from '../actions/comment_actions';
import { fetchTrackById } from '../actions/track_actions';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.session.id,
            track_id: parseInt(this.props.trackId),
            errors: undefined
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({author_id: this.props.session.id});
        createComment({
            body: this.state.body,
            author_id: this.props.session.id,
            track_id: parseInt(this.props.trackId),
        })
            .then((response) => this.handleResponse(response, true),
                (response) => this.handleResponse(response.responseJSON, false));
    }

    handleResponse(response, success) {
        if (success) {
            this.props.fetchComment(response.id);
            this.setState({body: ""});
            this.setState({errors: undefined});
            this.props.fetchTrackById(this.props.track.id);
        } else {
            this.setState({errors: "Comment must have between 1 and 500 characters"})
        }
    }

    render() {
        let errors = null;
        if (this.state.errors){
            errors = <div id="comment-form-error">{this.state.errors}</div>
        }
        return (
            <div id="comment-form-wrapper">
                {errors}
                <form id="comment-form" onSubmit={this.handleSubmit}>
                    <input id="comment-field" type="text" value={this.state.body} onChange={this.updateField('body')} autoComplete="off" placeholder="Leave a comment" />
                    <input id="submit-comment-button" type="submit" value="Post comment" />
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        session: state.session,
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComment: (comment) => dispatch(fetchComment(comment)),
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);