import React, { Component } from "react";
import "./Good.css";

export class Good extends Component {
  render() {
    return (
      <tbody>
        {this.props.goodsList.map((good) => {
          return (
            <tr key={good.inventoryNumber}>
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
