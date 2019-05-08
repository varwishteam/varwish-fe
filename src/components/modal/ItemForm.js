import React, { Component } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { createItem, closeModal, MODAL_TYPE, updateItem } from '../../actions';
import FormField from '../FormField';
import { connect } from 'react-redux';
import FormSelect from '../FormSelect';

const validate = values => {
  const errors = {};
  if (!values.item_name) errors.item_name = 'Required';
  if (!values.note) errors.note = 'Required';
  if (!values.link) errors.link = 'Required';
  if (!values.amount) errors.amount = 'Required';
  if (!values.price) errors.price = 'Required';
  return errors;
};

class CItemForm extends Component {
  componentWillMount() {
    const { item } = this.props;
    if (item) {
      this.props.initialize({
        item_name: item.item_name,
        note: item.note,
        link: item.link,
        price: item.price,
        amount: item.amount,
        category: item.category,
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
      categories,
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
        item.id = itemBeforeUpdate.id;
        return dispatchUpdateItem(item)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      }
    };

    return (
      <form id="itemForm" onSubmit={handleSubmit(submit)} className="m-0">
        <FormField name="item_name" type="text" label="Item name" />
        <FormField name="note" type="text" label="Note" />
        <FormField name="link" type="url" label="Link" />
        <FormField name="price" type="number" label="Price" />
        <FormField name="amount" type="number" label="Amount" />
        <FormSelect
          name="category"
          label="Category"
          options={categories}
          selectedOption={itemBeforeUpdate && itemBeforeUpdate.category}
        />

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

const mapStateToProps = state => ({
  categories: state.categories,
});

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
    mapStateToProps,
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
