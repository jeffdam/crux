import SessionButtons from './session_buttons';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const {session} = state;
  const {entities:{users}} = state;
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);