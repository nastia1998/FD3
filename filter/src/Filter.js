import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSorted: false,
      programmingLaunguagesList: this.props.programmingLaunguagesList.slice(),
      filterText: "",
    };
  }

  handleFilter = () => {
    if (this.state.filterText) {
      let filteredList = this.props.programmingLaunguagesList.filter((word) =>
        word.toLowerCase().includes(this.state.filterText.toLowerCase())
      );
      this.setState(
        { programmingLaunguagesList: filteredList },
        this.handleSorte
      );
    } else {
      this.setState(
        {
          programmingLaunguagesList:
            this.props.programmingLaunguagesList.slice(),
        },
        this.handleSorte
      );
    }
  };

  handleSorte = () => {
    if (this.state.isSorted) {
      this.setState({
        programmingLaunguagesList: this.state.programmingLaunguagesList.sort(),
      });
    }
  };

  handleDisplayList = (e) => {
    this.setState({ filterText: e.target.value }, this.handleFilter);
  };

  handleSortChange = (e) => {
    this.setState({ isSorted: e.target.checked }, this.handleFilter);
  };

  handleReset = () => {
    this.setState({
      isSorted: false,
      programmingLaunguagesList: this.props.programmingLaunguagesList.slice(),
      filterText: "",
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.state.isSorted}
            onChange={this.handleSortChange}
          />
          <input
            type="text"
            value={this.state.filterText}
            onChange={this.handleDisplayList}
          />
          <input type="button" onClick={this.handleReset} value="Reset" />
        </div>
        <div
          style={{
            height: "100%",
            maxWidth: "20%",
            overflow: "auto",
            border: "1px solid",
            margin: "2%",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              maxHeight: "50px",
              padding: "1px",
            }}
          >
            {this.state.programmingLaunguagesList.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
