import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        this.props.closeModal();
    }

    render(){
        const sessionLinks = () => (
            <nav className="login-signup">
                <button id="login-button" onClick={() => this.props.openModal('email')}>Sign in</button>
                <button id="signup-button" onClick={() => this.props.openModal('email')}>Create account</button>
            </nav>
        );

        if (!!this.props.currentUser) {
            return (
                <div>
                    <p>Hey, {this.props.currentUser.username}!</p>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            );
        }
        else {
            return (
                sessionLinks()
            );
        }
    }
}

export default Greeting;