import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Good.css";

export default class Good extends Component {
  handleSelectItem = () => {
    this.props.setSelectedRowId(this.props.goodInfo.inventoryNumber);
  };

  handleRemoveItem = () => {
    this.props.handleDeleteRow(this.props.goodInfo.inventoryNumber);
  };

  render() {
    return (
      <tr
        onClick={this.handleSelectItem}
        className={
          +this.props.selectedRowId === +this.props.goodInfo.inventoryNumber
            ? "rowSelected"
            : "rowInitial"
        }
      >
        <td>{this.props.goodInfo.name}</td>
        <td>{this.props.goodInfo.price}</td>
        <td>{this.props.goodInfo.url}</td>
        <td>{this.props.goodInfo.quantity}</td>
        <td>
          <input type="button" value="Delete" onClick={this.handleRemoveItem} />
        </td>
      </tr>
    );
  }
}

Good.propTypes = {
  goodInfo: PropTypes.shape({
    inventoryNumber: PropTypes.number.isRequired,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
  setSelectedRowId: PropTypes.func,
  handleDeleteRow: PropTypes.func,
};
