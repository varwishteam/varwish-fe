import React, { Component } from 'react';

/**
 * Display all item data
 *
 * @example <ItemDetail item={item} categories={categories} />
 */
export default class ItemDetail extends Component {
  render() {
    const { item, categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <img src="//placehold.it/200" className="img-fluid" alt="" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="text-muted">Price:</span>
                {item.price}
              </li>
              <li className="list-group-item">
                <span className="text-muted">Amount:</span>
                {item.amount}
              </li>
              <li className="list-group-item">
                <span className="text-muted">Link:</span>
                <a href={item.link}>{item.link}</a>
              </li>
              <li className="list-group-item">
                <span className="text-muted">Category:</span>
                {
                  categories.find(category => category.id === item.category)
                    .name
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted">Description</p>
            <p>{item.note}</p>
          </div>
        </div>
      </div>
    );
  }
}
