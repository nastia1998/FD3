import React, { Component } from "react";
import "./Good.css";

export class Good extends Component {
  state = {
    selectedRow: -1,
  };

  onRowClick = (rowId) => {
    if (rowId !== undefined) {
      this.setState({ selectedRow: rowId });
    }
  };

  render() {
    return (
      <tbody>
        {this.props.goodsList.map((good) => {
          return (
            <tr
              key={good.inventoryNumber}
              onClick={(e) => this.onRowClick(good.inventoryNumber)}
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
                <input type="button" value="Delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
