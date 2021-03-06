import * as UsersAPIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PAGE_USER = 'RECEIVE_PAGE_USER';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users: users
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

const receivePageUser = (user) => ({
    type: RECEIVE_PAGE_USER,
    user: user
});

export const fetchUsers = () => (dispatch) => {
    return UsersAPIUtil.fetchUsers()
        .then((users) => dispatch(receiveAllUsers(users))
    );
};

export const fetchUserByEmail = (email) => (dispatch) => {
    return UsersAPIUtil.fetchUserByEmail(email)
        .then((user) => dispatch(receiveUser(user))
    );
};

export const fetchUserById = (id) => (dispatch) => {
    return UsersAPIUtil.fetchUserById(id)
        .then((user) => dispatch(receivePageUser(user))
        );
};