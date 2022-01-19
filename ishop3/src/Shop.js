import React from "react";
import "./Shop.css";
import Good from "./Good.js";
import GoodCardDisplay from "./GoodCardDisplay";
import GoodCardEdit from "./GoodCardEdit";
import PropTypes from "prop-types";

class Shop extends React.Component {
  state = {
    selectedRowId: 0,
    goodsList: this.props.goodsList,
    selectedGood: {},
    handleMode: 0, // 0 - nothing, 1 - display, 2 - edit, 3 - new
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
    this.setState({ goodsList: filteredList, handleMode: 0, selectedRowId: 0 });
  };

  handleEditRow = (rowId) => {
    this.setState({ handleMode: 2 }, () => {
      let good = this.state.goodsList.find((good) => {
        return good.inventoryNumber === +rowId;
      });
      this.setState({ selectedGood: good, selectedRowId: rowId });
    });
  };

  handleProductAdd = () => {
    this.setState({ handleMode: 3, selectedRowId: "" });
  };

  handleSaveItem = (itemDetails) => {
    if (this.state.handleMode === 2) {
      let goods = this.state.goodsList.slice();
      let goodsResultList = goods.map((good) => {
        if (good.inventoryNumber === itemDetails.inventoryNumber) {
          good = itemDetails;
        }
        return good;
      });
      this.setState({ goodsList: goodsResultList });
    } else if (this.state.handleMode === 3) {
      itemDetails.inventoryNumber =
        this.state.goodsList[this.state.goodsList.length - 1].inventoryNumber +
        1;
      this.setState((state) => ({
        goodsList: [...state.goodsList, itemDetails],
      }));
    }
    this.setState({ handleMode: 0, selectedRowId: 0 });
  };

  handleCancelSave = () => {
    this.setState({ handleMode: 0, selectedRowId: 0 });
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
                  handleMode={this.state.handleMode}
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
        {this.state.handleMode !== 2 && (
          <input
            type="button"
            value="New product"
            onClick={this.handleProductAdd}
          />
        )}

        {this.state.handleMode === 1 && (
          <GoodCardDisplay goodDetails={this.state.selectedGood} />
        )}
        {(this.state.handleMode === 2 || this.state.handleMode === 3) && (
          <GoodCardEdit
            key={this.state.selectedGood.inventoryNumber}
            handleMode={this.state.handleMode}
            goodDetails={this.state.selectedGood}
            handleSaveItem={this.handleSaveItem}
            handleCancelSave={this.handleCancelSave}
          />
        )}
      </div>
    );
  }
}

export default Shop;

Good.propTypes = {
  goodsList: PropTypes.object,
};
