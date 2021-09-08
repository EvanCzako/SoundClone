import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => props.openModal('login')}>Login</button>
            <br />
            <button onClick={() => props.openModal('signup')}>Signup</button>
        </nav>
    );

    if (!!props.currentUser){
        props.closeModal();
        return (
            <div>
                <p>Hey, {props.currentUser.username}!</p>
                <button onClick={props.logout}>Logout</button>
            </div>
        );
    }
    else {
        return (
            sessionLinks()
        );
    }

};

export default Greeting;