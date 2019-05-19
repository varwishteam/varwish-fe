import {
  MODAL,
  MODAL_TYPE,
  openModal,
  closeModal,
  createModalTypes,
} from '../modalActions';

describe('Modal action tests', () => {
  test('Open and close modal tests', () => {
    expect(closeModal()).toEqual({ type: MODAL.CLOSE });

    expect(
      openModal({ modalType: MODAL_TYPE.WISHLIST, item: null, category: null }),
    ).toEqual({
      type: MODAL.OPEN,
      payload: { modalType: MODAL_TYPE.WISHLIST, item: null, category: null },
    });

    expect(
      openModal({ modalType: MODAL_TYPE.ITEM, item: null, category: null }),
    ).toEqual({
      type: MODAL.OPEN,
      payload: { modalType: MODAL_TYPE.ITEM, item: null, category: null },
    });

    expect(
      openModal({ modalType: MODAL_TYPE.CATEGORY, item: null, category: null }),
    ).toEqual({
      type: MODAL.OPEN,
      payload: { modalType: MODAL_TYPE.CATEGORY, item: null, category: null },
    });
  });

  test('Create modal types', () => {
    expect(createModalTypes('WISHLIST')).toEqual({
      CREATE: 'WISHLIST_CREATE_MODAL',
      UPDATE: 'WISHLIST_UPDATE_MODAL',
      DETAIL: 'WISHLIST_DETAIL_MODAL',
    });

    expect(createModalTypes('ITEM')).toEqual({
      CREATE: 'ITEM_CREATE_MODAL',
      UPDATE: 'ITEM_UPDATE_MODAL',
      DETAIL: 'ITEM_DETAIL_MODAL',
    });

    expect(createModalTypes('CATEGORY')).toEqual({
      CREATE: 'CATEGORY_CREATE_MODAL',
      UPDATE: 'CATEGORY_UPDATE_MODAL',
      DETAIL: 'CATEGORY_DETAIL_MODAL',
    });
  });
});
