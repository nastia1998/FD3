import React from "react";
import "./Shop.css";
import { Good } from "./Good.js";

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
    };
  }

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
          <Good goodsList={this.state.goodsList} />
        </table>
      </div>
    );
  }
}
