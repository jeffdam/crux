import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: "Log In" 
  });
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openOtherSessionModal: () => dispatch(openModal('signup')),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
