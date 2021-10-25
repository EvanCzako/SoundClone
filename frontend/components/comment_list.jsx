import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComment, deleteComment } from '../actions/comment_actions';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        for (let i = 0; i < this.props.trackComments.length; i++) {
            this.props.fetchComment(this.props.track.comments[i].id);
        }
    }

    render() {
        let comments = Object.values(this.props.trackComments).map((comment) => {
            if(this.props.comments[comment.id] != undefined){
                let deleteCommentButton = null;
                if (comment.author_id === this.props.session.id){
                    deleteCommentButton = <button className="delete-comment-button" onClick={() => this.props.deleteComment(comment.id)}>Delete comment</button>
                }
                return (<div key={comment.id}>
                    <Link to={`/users/${comment.author_id}`}>{this.props.comments[comment.id].author.username}</Link>
                    <div>{comment.body}</div>
                    {deleteCommentButton}
                </div>
                )} else{
                return null;
            }
        })
        return (
            <div id="comment-list-wrapper">
                {comments}
                <div id="space-for-audio-bar">
                    <div> </div>
                    <div> </div>
                    <br />
                    <div> </div>
                    <br />
                    <div> </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        tracks: state.entities.tracks,
        comments: state.entities.comments,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComment: (commentId) => dispatch(fetchComment(commentId)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);