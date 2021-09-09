import React from 'react';

class EmailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = Object.assign({}, this.state);
        this.props.handleEmail(email);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        let errors = null;
        let form = null;
        form = <form id="email-form" onSubmit={this.handleSubmit}>
            <input id="email-field" type="email" value={this.state.email} onChange={this.updateField('email')} placeholder="Email" />
            <input id="continue-button" type="submit" value="Continue" />
        </form>

        return (
            <div>
                <ul>{errors}</ul>
                <div>{form}</div>
            </div>
        );
    }
}

export default EmailForm;