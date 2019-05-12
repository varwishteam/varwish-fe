import React, { Component } from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import {
  createCategory,
  closeModal,
  MODAL_TYPE,
  updateCategory,
} from '../../actions';
import FormField from '../FormField';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  if (!values.name || values.name.trim().length < 1) errors.name = 'Required';
  return errors;
};

class CCategoryForm extends Component {
  componentWillMount() {
    const { category } = this.props;
    if (category) {
      this.props.initialize({
        name: category.name,
      });
    }
  }

  render() {
    const {
      category: categoryBeforeUpdate,
      handleSubmit,
      submitting,
      pristine,
      invalid,
      dispatchCreateCategory,
      dispatchUpdateCategory,
      closeModal,
      modalType,
    } = this.props;

    const submit = category => {
      if (modalType === MODAL_TYPE.CATEGORY.CREATE) {
        return dispatchCreateCategory(category)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      } else if (modalType === MODAL_TYPE.CATEGORY.UPDATE) {
        category.id = categoryBeforeUpdate.id;
        return dispatchUpdateCategory(category)
          .then(closeModal)
          .catch(error => {
            throw new SubmissionError(error);
          });
      }
    };

    return (
      <form id="categoryForm" onSubmit={handleSubmit(submit)} className="m-0">
        <FormField name="name" type="text" label="Category name" />
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
  dispatchCreateCategory: category => dispatch(createCategory(category)),
  dispatchUpdateCategory: category => dispatch(updateCategory(category)),
  closeModal: () => dispatch(closeModal()),
});

const CategoryForm = reduxForm({
  form: 'categoryForm',
  validate,
})(
  connect(
    null,
    mapDispatchToProps,
  )(CCategoryForm),
);

export const CreateCategoryForm = () => (
  <CategoryForm modalType={MODAL_TYPE.CATEGORY.CREATE} />
);

export const UpdateCategoryForm = ({ category }) => (
  <CategoryForm modalType={MODAL_TYPE.CATEGORY.UPDATE} category={category} />
);
