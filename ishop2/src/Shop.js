import React from "react";
import "./Shop.css";
import Good from "./Good.js";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    let goodsList = [
      {
        inventoryNumber: 1,
        name: "IPhone 13 Pro",
        price: "5 599 BYN",
        url: "https://i-store.by/iphone/iphone-13-pro/mlwg3rka",
        quantity: 10,
      },
      {
        inventoryNumber: 2,
        name: "Apple Watch 7",
        price: "1 499 BYN",
        url: "https://i-store.by/apple-watch/apple-watch-series-7/apple-watch-series-7-gps-41mm-temnaya-noch-sportivnyy-remeshok-cveta-temnaya-noch-mkmx3rba",
        quantity: 15,
      },
      {
        inventoryNumber: 3,
        name: "AirPods 3",
        price: "699 BYN",
        url: "https://i-store.by/accessories/acoustics/apple-airpods/besprovodnye-naushniki-apple-airpods-mme73rua",
        quantity: 20,
      },
    ];

    this.state = {
      goodsList: goodsList,
      selectedRowId: 0,
    };
  }

  handleSelectItem = (e) => {
    let selectedRowId = e.target.parentElement.getAttribute(
      "data-inventory-number"
    );
    this.setState({ selectedRowId: selectedRowId });
  };

  handleRemoveItem = (e) => {
    let parentElement = e.target.parentElement;

    if (!parentElement) return;

    let selectedRowId = parentElement.parentElement.getAttribute(
      "data-inventory-number"
    );

    if (selectedRowId) {
      let deleteRow = window.confirm("Do you really want to delete the good?");
      if (deleteRow) {
        let filteredGoodsList = this.state.goodsList.filter(
          (good) => good.inventoryNumber !== +selectedRowId
        );
        this.setState({ goodsList: filteredGoodsList });
      }
    }
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
                  handleSelectItem={this.handleSelectItem}
                  handleRemoveItem={this.handleRemoveItem}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
