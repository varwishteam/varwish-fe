import { MODAL } from '../actions';

/**
 * Modal reducer
 * @param {*} state
 * @param {type, payload} action
 */
export default function modalReducer(state = {}, action) {
  switch (action.type) {
    case MODAL.OPEN:
      return { ...state, openModal: action.payload };

    case MODAL.CLOSE:
      return { ...state, openModal: null };

    default:
      return state;
  }
}
