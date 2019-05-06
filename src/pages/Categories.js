import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal, MODAL_TYPE, deleteCategory } from '../actions';
import { Modal, UpdateCategoryForm } from '../components';
import { CreateCategoryForm } from '../components';

class Categories extends Component {
  componentDidMount() {
    this.props.isLoggedIn && this.props.getAllCategories();
  }

  renderCategories = categories => (
    <ul className="list-unstyled">
      {categories.map((category, i) => (
        <li
          key={category.id}
          className={`d-flex flex-row ${i % 2 === 0 && 'bg-light'}`}
        >
          <span>{category.name}</span>
          <div className="flex-grow-1" />
          <button
            type="button"
            className="btn text-secondary bmd-btn-icon"
            onClick={() => this.props.openUpdateCategoryModal(category)}
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            type="button"
            className="btn text-secondary bmd-btn-icon"
            onClick={() => this.handleDeleteCategory(category)}
          >
            <i className="material-icons">delete</i>
          </button>
        </li>
      ))}
    </ul>
  );

  handleDeleteCategory = category => {
    this.props.dispatchDeleteCategory(category).then(() => this.forceUpdate());
  };

  render() {
    const { openCategoryCreateModal, categories } = this.props;

    return (
      <>
        <button
          type="button"
          className="btn btn-dark w-50 btn-icon"
          onClick={openCategoryCreateModal}
        >
          <i className="material-icons">add</i>
          New Category
        </button>

        {categories &&
          categories.length > 0 &&
          this.renderCategories(categories)}

        <Modal title="New category" modalType={MODAL_TYPE.CATEGORY.CREATE}>
          <CreateCategoryForm />
        </Modal>

        <Modal
          title={`Editing ${this.props.currentlyEditedCategory.name}`}
          modalType={MODAL_TYPE.CATEGORY.UPDATE}
        >
          <UpdateCategoryForm category={this.props.currentlyEditedCategory} />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  currentlyEditedCategory: state.modalReducer.currentlyEditedCategory,
});

const mapDispatchToProps = dispatch => ({
  openCategoryCreateModal: () =>
    dispatch(openModal({ modalType: MODAL_TYPE.CATEGORY.CREATE })),
  openUpdateCategoryModal: category =>
    dispatch(openModal({ modalType: MODAL_TYPE.CATEGORY.UPDATE, category })),
  dispatchDeleteCategory: category => dispatch(deleteCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
