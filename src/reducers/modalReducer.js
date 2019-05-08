import { MODAL } from '../actions';

/**
 * Modal reducer
 * @param {*} state
 * @param {type, payload} action
 */
export default function modalReducer(state = {}, action) {
  switch (action.type) {
    case MODAL.OPEN:
      return {
        ...state,
        openedModal: action.payload.modalType,
        currentlyEditedItem: action.payload.item || {},
        currentlyEditedCategory: action.payload.category || {},
      };

    case MODAL.CLOSE:
      return {
        ...state,
        openedModal: null,
        currentlyEditedItem: {},
        currentlyEditedCategory: {},
      };

    default:
      return state;
  }
}
