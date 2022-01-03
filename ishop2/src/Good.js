import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Good.css";

export default class Good extends Component {
  render() {
    return (
      <tr
        data-inventory-number={this.props.goodInfo.inventoryNumber}
        onClick={this.props.handleSelectItem}
        className={
          +this.props.selectedRowId === this.props.goodInfo.inventoryNumber
            ? "rowSelected"
            : "rowInitial"
        }
      >
        <td>{this.props.goodInfo.name}</td>
        <td>{this.props.goodInfo.price}</td>
        <td>{this.props.goodInfo.url}</td>
        <td>{this.props.goodInfo.quantity}</td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={this.props.handleRemoveItem}
          />
        </td>
      </tr>
    );
  }
}

Good.propTypes = {
  goodInfo: PropTypes.shape({
    inventoryNumber: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
  handleSelectItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};
