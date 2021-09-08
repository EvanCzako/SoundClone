import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const defaultState = {
    id: null
};

const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({},oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState['id'] = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return defaultState;
        default:
            return oldState;
    }
}

export default sessionReducer;