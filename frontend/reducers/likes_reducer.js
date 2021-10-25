import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_LIKES:
            let likesArray = action.likes;
            let likesObject = likesArray.reduce(function (map, obj) {
                map[obj.id] = obj;
                return map;
            }, {});
            return likesObject;
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        default:
            return oldState;
    }
}

export default likesReducer;