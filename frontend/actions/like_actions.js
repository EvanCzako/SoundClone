import * as LikesApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes: likes
});

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId: likeId
    };
};

export const fetchLikes = () => (dispatch) => {
    return LikesApiUtil.fetchLikes()
        .then((likes) => dispatch(receiveLikes(likes)));
};

export const fetchLike = (likeId) => (dispatch) => {
    return LikesApiUtil.fetchLike(likeId)
        .then((like) => dispatch(receiveLike(like)));
};

export const deleteLike = (likeId) => (dispatch) => {
    return LikesApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)));
};