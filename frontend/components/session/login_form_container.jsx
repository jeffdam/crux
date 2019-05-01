import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: "Log In" 
  });
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (<a href="#" onClick={() => dispatch(openModal('signup'))}>Sign Up</a>),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
