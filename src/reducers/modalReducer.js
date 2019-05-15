import { MODAL } from '../actions';

/**
 * Handles opening, and closing modals
 * @param {Object} state Current state
 * @param {Object} action
 * @param {string} action.type
 * @param {*} action.payload
 * @return {Object} State
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
