import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: "Sign Up"
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: user => dispatch(signup(user)),
    otherForm: (<a href="#" onClick={() => dispatch(openModal('login'))}>Log In</a>),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('signup')),
    clearErrors : () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
