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
    closeModal: () => dispatch(closeModal()),
    openOtherSessionModal: () => dispatch(openModal('login')),
    clearErrors : () => dispatch(clearErrors())
  }); 
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
