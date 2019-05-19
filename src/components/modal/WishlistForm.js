import React, { Component } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import {
  createWishlist,
  closeModal,
  MODAL_TYPE,
  updateWishlist,
} from '../../actions';
import FormField from '../FormField';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  if (!values.name || values.name.trim().length < 1) errors.name = 'Required';
  if (!values.description || values.description.trim().length < 1)
    errors.description = 'Required';
  return errors;
};

/**
 * Handles creating and updating Wishlists
 * Has the following fields:
 * - name: string
 * - description: string
 */
class CWishlistForm extends Component {
  componentWillMount() {
    const { wishlist } = this.props;
    if (wishlist) {
      this.props.initialize({
        name: wishlist.name,
        description: wishlist.description,
      });
    }
  }

  render() {
    const {
      wishlist: wishlistBeforeUpdate,
      handleSubmit,
      submitting,
      pristine,
      invalid,
      dispatchCreateWishlist,
      dispatchUpdateWishlist,
      closeModal,
      modalType,
    } = this.props;

    const submit = wishlist => {
      if (modalType === MODAL_TYPE.WISHLIST.CREATE) {
        wishlist.items = [];
        return dispatchCreateWishlist(wishlist)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      } else if (modalType === MODAL_TYPE.WISHLIST.UPDATE) {
        wishlist.id = wishlistBeforeUpdate.id;
        return dispatchUpdateWishlist(wishlist)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      }
    };

    return (
      <form id="wishlistForm" onSubmit={handleSubmit(submit)} className="m-0">
        <FormField name="name" type="text" label="Wishlist name" />
        <FormField
          name="description"
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
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchCreateWishlist: wishlist => dispatch(createWishlist(wishlist)),
  dispatchUpdateWishlist: wishlist => dispatch(updateWishlist(wishlist)),
  closeModal: () => dispatch(closeModal()),
});

const WishlistForm = reduxForm({
  form: 'wishlistForm',
  validate,
})(
  connect(
    null,
    mapDispatchToProps,
  )(CWishlistForm),
);

export const CreateWishlistForm = () => (
  <WishlistForm modalType={MODAL_TYPE.WISHLIST.CREATE} />
);

export const UpdateWishlistForm = ({ wishlist }) => (
  <WishlistForm modalType={MODAL_TYPE.WISHLIST.UPDATE} wishlist={wishlist} />
);
