/**
 * Redux actions for modals
 */
export const MODAL = {
  OPEN: 'MODAL_OPEN',
  CLOSE: 'MODAL_CLOSE',
};

/**
 * Generates all Redux actions for given modal type
 */
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

/**
 * Dispatch this to open a modal
 * @param {Object} obj
 * @param {string} obj.modalType
 * @param {string} [obj.item] Pass in item data when opening 'ITEM_UPDATE_MODAL'
 * @param {string} [obj.category] Pass in category data when opening 'CATEGORY_UPDATE_MODAL'
 */
export const openModal = ({ modalType, item, category }) => ({
  type: MODAL.OPEN,
  payload: { modalType, item, category },
});

/**
 * Dispatch this to close the currently opened modal
 */
export const closeModal = () => ({
  type: MODAL.CLOSE,
});
