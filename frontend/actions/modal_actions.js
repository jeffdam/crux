export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  const modalDup = (["login", "signup", "areaCreateFAQ", "addPhotos"].includes(modal)) ? { action: modal, pathOnSucces: null } : modal;
  return {
    type: OPEN_MODAL,
    modal: modalDup
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};