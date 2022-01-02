import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Good.css";

export class Good extends Component {
  constructor(props) {
    super(props);

    let goodsList = [];

    this.props.goodsList.forEach((good) => {
      goodsList.push(good);
    });

    this.state = {
      selectedRow: -1,
      goodsList: goodsList,
    };
  }

  onRowClick = (rowId) => {
    if (rowId !== undefined) {
      this.setState({ selectedRow: rowId });
    }
  };

  handleDelete = (rowId) => {
    let deleteRow = window.confirm("Do you really want to delete the good");
    if (deleteRow) {
      let filteredGoodsList = this.props.goodsList.filter(
        (good) => good.inventoryNumber !== rowId
      );
      this.setState({ goodsList: filteredGoodsList });
    }
  };

  render() {
    return (
      <tbody>
        {this.state.goodsList.map((good) => {
          return (
            <tr
              key={good.inventoryNumber}
              onClick={() => this.onRowClick(good.inventoryNumber)}
              className={
                this.state.selectedRow === good.inventoryNumber
                  ? "rowSelected"
                  : ""
              }
            >
              <td>{good.name}</td>
              <td>{good.price}</td>
              <td>{good.url}</td>
              <td>{good.quantity}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => this.handleDelete(good.inventoryNumber)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

Good.propTypes = {
  goodsList: PropTypes.array,
};
