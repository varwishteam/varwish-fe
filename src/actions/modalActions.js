export const MODAL = {
  OPEN: 'MODAL_OPEN',
  CLOSE: 'MODAL_CLOSE',
};

export const MODAL_TYPE = {
  WISHLIST: {
    CREATE: 'WISHLIST_CREATE_MODAL',
    UPDATE: 'WISHLIST_UPDATE_MODAL',
  },
};

export const openModal = modalName => ({
  type: MODAL.OPEN,
  payload: modalName,
});

export const closeModal = () => ({
  type: MODAL.CLOSE,
});
