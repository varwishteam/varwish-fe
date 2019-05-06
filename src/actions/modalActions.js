export const MODAL = {
  OPEN: 'MODAL_OPEN',
  CLOSE: 'MODAL_CLOSE',
};

function createModalTypes(entityName) {
  return {
    CREATE: `${entityName}_CREATE_MODAL`,
    UPDATE: `${entityName}_UPDATE_MODAL`,
  };
}

export const MODAL_TYPE = {
  WISHLIST: createModalTypes('WISHLIST'),
  ITEM: createModalTypes('ITEM'),
  CATEGORY: createModalTypes('CATEGORY'),
};

export const openModal = ({ modalType, item, category }) => ({
  type: MODAL.OPEN,
  payload: { modalType, item, category },
});

export const closeModal = () => ({
  type: MODAL.CLOSE,
});
