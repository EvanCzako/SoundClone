import React from 'react';
import { closeModal, openModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import EmailFormContainer from './email_form_container';
import { fetchUserByEmail } from '../actions/user_actions';
import { clearSessionErrors } from '../actions/session_actions';
import { loginUser } from '../actions/session_actions';

class Modal extends React.Component {

    constructor(props){
        super(props);
        this.state = {email: ''}
        this.handleEmail = this.handleEmail.bind(this);
        this.openNextForm = this.openNextForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    }

    handleEmail(email){
        this.setState((state) => {
            return { email: email['email'] };
        });
        this.props.processForm(email['email'])
            .then(() => this.openNextForm());
    }

    openNextForm(){
        let frontEndUsers = Object.values(this.props.users);
        let emailExists = frontEndUsers.some((u) => {return u['email']===this.state['email']});
        if(emailExists){
            this.props.openModal('login');
        } else {
            this.props.openModal('signup');
        }
    }

    handleClose(){
        this.props.closeModal();
        this.props.clearSessionErrors();
    }

    handleDemoClick() {
        this.props.loginDemoUser({email: "demouser@gmail.com", password: "1234567"});
    }

    render() {

        let {modal,closeModal} = this.props;
        let component;
        switch (modal) {
            case 'email':
                component = <EmailFormContainer handleEmail={this.handleEmail} />;
                break;
            case 'login':
                component = <LoginFormContainer email={this.state.email}/>;
                break;
            case 'signup':
                component = <SignupFormContainer email={this.state.email}/>;
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={this.handleClose}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div></div>
                    <button id="demouser-signin" onClick={this.handleDemoClick}>Sign in as demo user</button>
                    <div>----------------or----------------</div>
                    {component}
                    <div></div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (email) => dispatch(fetchUserByEmail(email)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modalType) => dispatch(openModal(modalType)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        loginDemoUser: (user) => dispatch(loginUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);