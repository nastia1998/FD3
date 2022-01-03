import React from "react";
import "./Shop.css";
import Good from "./Good.js";

export default class Shop extends React.Component {
  state = {
    selectedRowId: 0,
  };

  setSelectedRowId = (selectedRowId) => {
    this.setState({ selectedRowId });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>URL</th>
              <th>Quantity</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {this.props.goodsList.map((good) => {
              return (
                <Good
                  key={good.inventoryNumber}
                  goodInfo={good}
                  selectedRowId={this.state.selectedRowId}
                  setSelectedRowId={this.setSelectedRowId}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
