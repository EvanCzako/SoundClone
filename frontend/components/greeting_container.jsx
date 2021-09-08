import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Greeting)