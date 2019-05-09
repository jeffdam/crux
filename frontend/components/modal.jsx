import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import AreaCreateFAQ from '../components/areas/area_create_faq';
import UploadPhotosFormContainer from '../components/shared/upload_photos_form_container';

function Modal({ modal, closeModal }) {
  if (!modal.action) {
    return null;
  }
  let component; 
  switch (modal.action) {
    case 'login':
      component = <LoginFormContainer pathOnSuccess={modal.pathOnSuccess} />;
      break;
    case 'signup':
      component = <SignupFormContainer pathOnSuccess={modal.pathOnSuccess} />;
      break;
    case 'areaCreateFAQ':
      component = <AreaCreateFAQ />;
      break;
    case 'addPhotos':
      component = <UploadPhotosFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className="modal-exit-button" onClick={closeModal} >&times;</div>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);