import React from "react";
import "./Shop.css";
import Good from "./Good.js";
import GoodCardDisplay from "./GoodCardDisplay";
import PropTypes from "prop-types";

export default class Shop extends React.Component {
  state = {
    selectedRowId: 0,
    goodsList: this.props.goodsList,
    selectedGood: {},
  };

  setSelectedRowId = (selectedRowId) => {
    this.setState(
      {
        selectedRowId,
      },
      () => {
        let good = this.state.goodsList.find((good) => {
          return good.inventoryNumber === this.state.selectedRowId;
        });
        this.setState({ selectedGood: good });
      }
    );
  };

  handleDeleteRow = (rowId) => {
    let filteredList = this.state.goodsList.filter(
      (good) => good.inventoryNumber !== +rowId
    );
    this.setState({ goodsList: filteredList });
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
            {this.state.goodsList.map((good) => {
              return (
                <Good
                  key={good.inventoryNumber}
                  goodInfo={good}
                  selectedRowId={this.state.selectedRowId}
                  setSelectedRowId={this.setSelectedRowId}
                  handleDeleteRow={this.handleDeleteRow}
                />
              );
            })}
          </tbody>
        </table>
        {this.state.selectedRowId > 0 && (
          <GoodCardDisplay goodDetails={this.state.selectedGood} />
        )}
      </div>
    );
  }
}

Good.propTypes = {
  goodsList: PropTypes.object,
};
