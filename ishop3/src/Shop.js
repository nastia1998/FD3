import React from "react";
import "./Shop.css";
import Good from "./Good.js";
import GoodCardDisplay from "./GoodCardDisplay";
import GoodCardEdit from "./GoodCardEdit";
import PropTypes from "prop-types";

export default class Shop extends React.Component {
  state = {
    selectedRowId: 0,
    goodsList: this.props.goodsList,
    selectedGood: {},
    handleMode: 0, // 0 - nothing, 1 - display, 2 - edit/new
  };

  setSelectedRowId = (selectedRowId) => {
    this.setState(
      {
        selectedRowId,
        handleMode: 1,
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
    this.setState({ goodsList: filteredList, handleMode: 0 });
  };

  handleEditRow = () => {
    console.log("handle Edit row");
    this.setState({ handleMode: 2 });
  };

  handleProductAdd = () => {
    this.setState({ handleMode: 2 });
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
                  handleEditRow={this.handleEditRow}
                />
              );
            })}
          </tbody>
        </table>
        <input
          type="button"
          value="New product"
          onClick={this.handleProductAdd}
        />
        {this.state.handleMode === 1 && (
          <GoodCardDisplay goodDetails={this.state.selectedGood} />
        )}
        {this.state.handleMode === 2 && <GoodCardEdit />}
      </div>
    );
  }
}

Good.propTypes = {
  goodsList: PropTypes.object,
};
