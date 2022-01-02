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
        photo:
          "https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210915083825045903/210927160103135266.png@webp",
        quantity: 10,
      },
      {
        inventoryNumber: 2,
        name: "Apple Watch 7",
        price: "1 499 BYN",
        url: "https://i-store.by/apple-watch/apple-watch-series-7/apple-watch-series-7-gps-41mm-temnaya-noch-sportivnyy-remeshok-cveta-temnaya-noch-mkmx3rba",
        photo:
          "https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210929080201206359/211013100012479180.png@webp",
        quantity: 15,
      },
      {
        inventoryNumber: 3,
        name: "AirPods 3",
        price: "699 BYN",
        url: "https://i-store.by/accessories/acoustics/apple-airpods/besprovodnye-naushniki-apple-airpods-mme73rua",
        photo:
          "https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/211019073853864127/211019160019202953.png@webp",
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
