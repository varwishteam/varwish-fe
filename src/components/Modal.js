import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closeModal } from '../actions';
import './modal/Modal.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const {
      title,
      modalType,
      children,
      openedModal,
      dispatchCloseModal,
    } = this.props;
    if (!children) {
      console.error(
        'Error in Modal component: You need to pass some children to be rendered in the Modal',
      );
      return null;
    }

    if (openedModal === modalType) {
      return ReactDOM.createPortal(
        <>
          <div id="modal" className="modal d-block" tabIndex="-1" role="dialog">
            <div className="modal-backdrop" onClick={dispatchCloseModal} />
            <div
              className="modal-dialog  modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={dispatchCloseModal}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        </>,
        this.el,
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  openedModal: state.modalReducer.openedModal,
});

const mapDispatchToProps = dispatch => ({
  dispatchCloseModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
