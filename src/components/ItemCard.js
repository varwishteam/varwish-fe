import React, { Component } from 'react';
import './itemCard/ItemCard.scss';

/**
 * Render item data on a card to be used in a list
 *
 * @example <ItemCard item={item} onUpdate={someOnUpdateHandler()} onDelete={someOnDeleteHandler()} />
 */
export default class ItemCard extends Component {
  render() {
    const { item, onUpdate, onDelete } = this.props;
    return (
      <div className="item-card card w-100 m-2">
        <div className="row no-gutters">
          <div className="col-auto">
            <img src="//placehold.it/100" className="img-fluid" alt="" />
          </div>
          <div className="col">
            <div className="card-block">
              <h4 className="card-title">{item.item_name}</h4>
              <p className="card-text">{item.note}</p>
            </div>
          </div>
          <div className="card-block">
            <div className="col d-flex flex-column">
              <button
                type="button"
                className="btn text-secondary bmd-btn-icon"
                onClick={() => onUpdate(item)}
              >
                <i className="material-icons">edit</i>
              </button>
              <button
                type="button"
                className="btn text-secondary bmd-btn-icon"
                onClick={() => onDelete(item)}
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
