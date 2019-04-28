export const MODAL = {
  OPEN: 'MODAL_OPEN',
  CLOSE: 'MODAL_CLOSE',
};

export const MODAL_TYPE = {
  WISHLIST: {
    CREATE: 'WISHLIST_CREATE_MODAL',
    UPDATE: 'WISHLIST_UPDATE_MODAL',
  },
  ITEM: {
    CREATE: 'ITEM_CREATE_MODAL',
    UPDATE: 'ITEM_UPDATE_MODAL',
  },
};

export const openModal = (modalName, item) => ({
  type: MODAL.OPEN,
  payload: { modalName, item },
});

export const closeModal = () => ({
  type: MODAL.CLOSE,
});
