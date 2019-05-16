import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  openModal,
  MODAL_TYPE,
  deleteCategory,
  getAllCategories,
} from '../actions';
import { Modal, UpdateCategoryForm } from '../components';
import { CreateCategoryForm } from '../components';
import './categories/Categories.scss';

/**
 * Categories page
 */
class Categories extends Component {
  componentDidMount() {
    this.props.isLoggedIn && this.props.getAllCategories();
  }

  renderCategories = categories => (
    <ul className="list-group">
      {categories.map((category, i) => (
        <li
          key={category.id}
          className={`d-flex flex-row list-group-item ${i % 2 === 0 &&
            'bg-light'}`}
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
      <div className="categories">
        <header className="header nav">
          <h1 className="header__title">Categories</h1>
          <button
            type="button"
            className="btn btn-primary btn-icon header__button"
            onClick={openCategoryCreateModal}
          >
            <i className="material-icons">add</i>
            New Category
          </button>
        </header>

        <main className="main-content">
          {categories && categories.length > 0 ? (
            this.renderCategories(categories)
          ) : (
            <div className="no-content">
              <p>You have no categories... Yet.</p>
              <p>
                Click or tap the <strong>NEW CATEGORY</strong> button above to
                get started.
              </p>
              <img
                src="/img/undraw_empty_xct9.svg"
                alt="Empty"
                aria-hidden="true"
                className="no-content__img"
              />
            </div>
          )}
        </main>
        <aside>
          <Modal title="New category" modalType={MODAL_TYPE.CATEGORY.CREATE}>
            <CreateCategoryForm />
          </Modal>

          <Modal
            title={`Editing ${this.props.currentlyEditedCategory.name}`}
            modalType={MODAL_TYPE.CATEGORY.UPDATE}
          >
            <UpdateCategoryForm category={this.props.currentlyEditedCategory} />
          </Modal>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  categories: state.categories,
  currentlyEditedCategory: state.modalReducer.currentlyEditedCategory,
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
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
