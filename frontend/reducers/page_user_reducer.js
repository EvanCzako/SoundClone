import { RECEIVE_PAGE_USER } from "../actions/user_actions";

const pageUserReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PAGE_USER:
            return  action.user;
        default:
            return oldState;
    }
}

export default pageUserReducer;