import * as CommentsApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments: comments
});

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId: commentId
    };
};

export const fetchComments = () => (dispatch) => {
    return CommentsApiUtil.fetchComments()
        .then((comments) => dispatch(receiveComments(comments)));
};

export const fetchComment = (commentId) => (dispatch) => {
    return CommentsApiUtil.fetchComment(commentId)
        .then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (commentId) => (dispatch) => {
    return CommentsApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)));
};