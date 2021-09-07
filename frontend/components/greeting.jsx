import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (!!props.currentUser){
        return (
            <div>
                <p>Hey, {props.currentUser.first_name}!</p>
                <button onClick={props.logout}>Logout</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <Link to='/signup'>Sign Up</Link>
                <br/>
                <Link to='/login'>Log In</Link>
            </div>
        );
    }

};

export default Greeting;