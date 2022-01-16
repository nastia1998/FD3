import React from "react";
import PropTypes from "prop-types";

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
      this.state.isSorted && filteredList.sort();
      this.setState({ programmingLaunguagesList: filteredList });
    } else {
      let resultList = this.props.programmingLaunguagesList.slice();
      this.state.isSorted && resultList.sort();
      this.setState({
        programmingLaunguagesList: resultList,
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

Filter.propTypes = {
  programmingLaunguagesList: PropTypes.array,
};

export default Filter;
