import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { store } from '../store';
import { createWishlist } from '../actions';

const validate = values => {
  const errors = {};
  if (!values.wishlistName) {
    errors.wishlistName = 'Required';
  }
  if (!values.wishlistDescription) {
    errors.wishlistDescription = 'Required';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input
        className={`form-control ${error && 'is-invalid'}`}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
);

const CreateWishlistModal = props => {
  const initialState = {
    saveDisabled: false,
  };
  const [state, setState] = useState(initialState);
  const { handleSubmit, submitting } = props;

  const submit = wishlist => {
    store.dispatch(createWishlist(wishlist));
    setState({ saveDisabled: true });
    window.$('#createWishlistModal').on('hidden.bs.modal', e => {
      setState(initialState);
      store.dispatch(reset('wishlistForm'));
    });
    window.$('#createWishlistModal').modal('hide');
  };

  const cancel = () => {
    window.$('#createWishlistModal').on('hidden.bs.modal', e => {
      setState(initialState);
      store.dispatch(reset('wishlistForm'));
    });
    window.$('#createWishlistModal').modal('hide');
  };

  return (
    <div
      className="modal fade"
      id="createWishlistModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createWishlistModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createWishlistModalTitle">
              New wishlist
            </h5>
            <div className="flex-grow-1" />
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form id="wishlistForm" onSubmit={handleSubmit(submit)}>
            <div className="modal-body">
              <div className="form-group">
                <Field
                  name="wishlistName"
                  component={renderField}
                  type="text"
                  label="Wishlist name"
                />
              </div>
              <div className="form-group">
                <Field
                  name="wishlistDescription"
                  component={renderField}
                  type="text"
                  label="Wishlist description"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.saveDisabled || submitting}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default reduxForm({
  form: 'wishlistForm',
  validate,
  warn,
})(CreateWishlistModal);
