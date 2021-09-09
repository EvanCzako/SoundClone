import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';
import { signup, loginUser, logoutUser } from './actions/session_actions';
import { fetchUsers } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {

    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;
    window.signup = signup;
    window.fetchUsers = fetchUsers;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});

