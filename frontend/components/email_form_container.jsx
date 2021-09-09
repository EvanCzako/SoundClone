import React from "react";
import { connect } from 'react-redux';
import EmailForm from './email_form';
import { fetchUserByEmail} from '../actions/user_actions';
import { openModal, closeModal } from '../actions/modal_actions';

const mSTP = (state) => ({
    // errors: state.errors.session,
    formType: 'email',
    users: state.entities.users
});

const mDTP = (dispatch) => ({
    processForm: (email) => dispatch(fetchUserByEmail(email)),
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EmailForm);