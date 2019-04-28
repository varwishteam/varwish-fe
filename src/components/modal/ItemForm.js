import React, { Component } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { createItem, closeModal, MODAL_TYPE, updateItem } from '../../actions';
import FormField from '../FormField';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  if (!values.itemName) errors.itemName = 'Required';
  if (!values.itemNote) errors.itemNote = 'Required';
  if (!values.itemLink) errors.itemLink = 'Required';
  if (!values.itemAmount) errors.itemAmount = 'Required';
  if (!values.itemPrice) errors.itemPrice = 'Required';
  return errors;
};

class CItemForm extends Component {
  componentWillMount() {
    const { item } = this.props;
    if (item) {
      this.props.initialize({
        itemName: item.item_name,
        itemNote: item.description,
        itemLink: item.link,
        itemPrice: item.price,
        itemAmount: item.amount,
      });
    }
  }

  render() {
    const {
      item: itemBeforeUpdate,
      wishlistId,
      handleSubmit,
      submitting,
      pristine,
      invalid,
      dispatchCreateItem,
      dispatchUpdateItem,
      closeModal,
      modalType,
    } = this.props;

    const submit = item => {
      item.wishlist = wishlistId;
      if (modalType === MODAL_TYPE.ITEM.CREATE) {
        return dispatchCreateItem(item)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      } else if (modalType === MODAL_TYPE.ITEM.UPDATE) {
        item.itemId = itemBeforeUpdate.id;
        return dispatchUpdateItem(item)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      }
    };

    return (
      <form id="itemForm" onSubmit={handleSubmit(submit)} className="m-0">
        <FormField name="itemName" type="text" label="Item name" />
        <FormField name="itemNote" type="text" label="Note" />
        <FormField name="itemLink" type="text" label="Link" />
        <FormField name="itemPrice" type="text" label="Price" />
        <FormField name="itemAmount" type="text" label="Amount" />

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || invalid || submitting}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchCreateItem: item => dispatch(createItem(item)),
  dispatchUpdateItem: item => dispatch(updateItem(item)),
  closeModal: () => dispatch(closeModal()),
});

const ItemForm = reduxForm({
  form: 'itemForm',
  validate,
})(
  connect(
    null,
    mapDispatchToProps,
  )(CItemForm),
);

export const CreateItemForm = ({ item, wishlistId }) => (
  <ItemForm
    modalType={MODAL_TYPE.ITEM.CREATE}
    item={item}
    wishlistId={wishlistId}
  />
);

export const UpdateItemForm = ({ item, wishlistId }) => (
  <ItemForm
    modalType={MODAL_TYPE.ITEM.UPDATE}
    item={item}
    wishlistId={wishlistId}
  />
);
