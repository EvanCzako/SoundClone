import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            return {...action.users};
        case RECEIVE_USER:
            if (action.user.length>0){
                let u = action.user[0];
                let id = u.id;
                nextState[id] = u;
                return nextState;
            } else {
                return {}
            }
        // case REMOVE_ALL_USERS_FROM_STATE:
        //     return {};
        default:
            return oldState;
    }
}

export default usersReducer;