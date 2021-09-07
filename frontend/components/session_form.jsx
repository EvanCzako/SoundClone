import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
            form = <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.updateField('email')} placeholder="Email"/>
                <input type="text" value={this.state.password} onChange={this.updateField('password')} placeholder="Password"/>
                <input type="submit" value="SIGN IN" />
            </form>
        } else if (this.props.formType === "signup") {
            form = <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.updateField('username')} placeholder="Username"/>
                <input type="text" value={this.state.email} onChange={this.updateField('email')} placeholder="Email"/>
                <input type="text" value={this.state.password} onChange={this.updateField('password')} placeholder="Password"/>
                <input type="submit" value="SIGN UP"/>
            </form>
        }

        return(
            <div>
                <ul>{errors}</ul>
                <div>{form}</div>
            </div>
        );
    }
}

export default SessionForm;