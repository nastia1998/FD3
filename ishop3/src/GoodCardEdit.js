import React, { Component } from "react";

class GoodCardEdit extends Component {
  state = {
    goodDetails: this.props.goodDetails,
  };

  handleNameChange = (e) => {
    this.setState((prevState) => ({
      goodDetails: {
        ...prevState.goodDetails,
        name: e.target.value,
      },
    }));
  };

  handlePriceChange = (e) => {
    this.setState((prevState) => ({
      goodDetails: {
        ...prevState.goodDetails,
        price: e.target.value,
      },
    }));
  };

  handleUrlChange = (e) => {
    this.setState((prevState) => ({
      goodDetails: {
        ...prevState.goodDetails,
        url: e.target.value,
      },
    }));
  };

  handleQuanityChange = (e) => {
    this.setState((prevState) => ({
      goodDetails: {
        ...prevState.goodDetails,
        quantity: e.target.value,
      },
    }));
  };

  handleSaveItem = () => {
    this.props.handleSaveItem(this.state.goodDetails);
  };

  handleCancel = () => {
    this.props.handleCancelSave();
  };

  render() {
    return (
      <div>
        <b>Name: </b>
        <input
          type="text"
          value={this.state.goodDetails.name || ""}
          onChange={this.handleNameChange}
        />
        <br />
        <b>Price: </b>
        <input
          type="text"
          value={this.state.goodDetails.price || ""}
          onChange={this.handlePriceChange}
        />{" "}
        <br />
        <b>URL: </b>
        <input
          type="text"
          value={this.state.goodDetails.url || ""}
          onChange={this.handleUrlChange}
        />{" "}
        <br />
        <b>Quantity: </b>
        <input
          type="text"
          value={this.state.goodDetails.quantity || ""}
          onChange={this.handleQuanityChange}
        />{" "}
        <br />
        <input type="button" value="Save" onClick={this.handleSaveItem} />
        <input type="button" value="Cancel" onClick={this.handleCancel} />
      </div>
    );
  }
}

export default GoodCardEdit;
