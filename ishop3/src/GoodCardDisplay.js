import React, { Component } from "react";

class GoodCardDisplay extends Component {
  state = {
    goodDetails: this.props.goodDetails,
  };

  render() {
    return (
      <div>
        {this.state.goodDetails !== undefined && (
          <div>
            <h2>{this.props.goodDetails.name}</h2>
            <p>Price: {this.props.goodDetails.price}</p>
            <p>URL: {this.props.goodDetails.url}</p>
            <p>Quantity: {this.props.goodDetails.quantity}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GoodCardDisplay;
