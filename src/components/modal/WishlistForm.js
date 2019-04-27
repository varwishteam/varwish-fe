import React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { createWishlist, closeModal } from '../../actions';
import FormField from '../FormField';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  if (!values.wishlistName) errors.wishlistName = 'Required';
  if (!values.wishlistDescription) errors.wishlistDescription = 'Required';
  return errors;
};

const WishlistForm = ({
  handleSubmit,
  submitting,
  pristine,
  invalid,
  dispatchCreateWishlist,
  closeModal,
}) => {
  const submit = wishlist => {
    return dispatchCreateWishlist(wishlist)
      .then(closeModal)
      .catch(error => {
        throw new SubmissionError(error);
      });
  };

  return (
    <form id="wishlistForm" onSubmit={handleSubmit(submit)} className="m-0">
      <FormField name="wishlistName" type="text" label="Wishlist name" />
      <FormField
        name="wishlistDescription"
        type="text"
        label="Wishlist description"
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
};

const mapDispatchToProps = dispatch => ({
  dispatchCreateWishlist: wishlist => dispatch(createWishlist(wishlist)),
  closeModal: () => dispatch(closeModal()),
});

export default reduxForm({
  form: 'wishlistForm',
  validate,
})(
  connect(
    null,
    mapDispatchToProps,
  )(WishlistForm),
);
