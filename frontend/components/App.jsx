import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Modal from "./modal";
import {Link} from "react-router-dom";


const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>SoundClone</h1>
            </Link>
            <GreetingContainer />
        </header>
    </div>
);

export default App;