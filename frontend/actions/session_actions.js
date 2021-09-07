import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});

export const loginUser = (user) => (dispatch) => {
    return SessionAPIUtil.login(user).then(
        (currentUser) => dispatch(receiveCurrentUser(currentUser)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const logoutUser = () => (dispatch) => (
    SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => (dispatch) =>
    SessionAPIUtil.signup(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
    );