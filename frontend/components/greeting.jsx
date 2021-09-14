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
                <div id="top-nav-right-links">
                    <Link to="/upload" id="upload-page-link-button">Upload</Link>
                    <Link to={`/users/${this.props.currentUser.id}`} id="current-user-profile-button">{this.props.currentUser.username}</Link>
                    <button onClick={this.props.logout} id="logout-button">Sign out</button>
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