import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Shop from "./Shop";
import reportWebVitals from "./reportWebVitals";

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

ReactDOM.render(
  <React.StrictMode>
    <Shop goodsList={goodsList} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
