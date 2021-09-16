import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: "",
            username: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    render() {

        let errors = null;

        if (this.props.errors.length > 0) {
            errors = this.props.errors.map((err, idx) => (
                <li key={idx}>{err}</li>
            ));
        };

        let form = null;

        if (this.props.formType === "login") {
            form = <form id="login-form" onSubmit={this.handleSubmit}>
                <input id="login-password-field" type="password" value={this.state.password} onChange={this.updateField('password')} placeholder="Password"/>
                <input id="login-account-button" type="submit" value="SIGN IN" />
            </form>
        } else if (this.props.formType === "signup") {
            form = <form id="signup-form" onSubmit={this.handleSubmit}>
                <input id="signup-username-field" type="text" value={this.state.username} onChange={this.updateField('username')} placeholder="Username"/>
                <input id="signup-password-field" type="password" value={this.state.password} onChange={this.updateField('password')} placeholder="Password"/>
                <input id="signup-account-button" type="submit" value="SIGN UP"/>
            </form>
        }

        return(
            <div>
                <br/>
                <br />
                <ul id="session-errors-list">{errors}</ul>
                <div>{form}</div>
            </div>
        );
    }
}

export default SessionForm;