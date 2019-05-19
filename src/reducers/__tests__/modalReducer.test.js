import { default as modalReducer } from '../index';
import { MODAL } from '../../actions/modalActions';

describe('Modal reducer test', () => {
  test('Modal open and close', () => {
    initState = {};

    expect(
      modalReducer(initState, {
        type: MODAL.OPEN,
        payload: { modalType: 'WISHLIST', item: {}, category: {} },
      }),
    ).toEqual({
      openedModal: 'WISHLIST',
      currentlyEditedItem: {},
      currentlyEditedCategory: {},
    });

    expect(
      modalReducer(initState, {
        type: MODAL.CLOSE,
        payload: { modalType: 'WISHLIST', item: {}, category: {} },
      }),
    ).toEqual({
      openedModal: null,
      currentlyEditedItem: {},
      currentlyEditedCategory: {},
    });
  });
});
