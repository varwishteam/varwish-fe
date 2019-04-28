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
        openedModal: action.payload.modalName,
        currentlyEditedItem: action.payload.item || {},
      };

    case MODAL.CLOSE:
      return { ...state, openedModal: null, currentlyEditedItem: {} };

    default:
      return state;
  }
}
