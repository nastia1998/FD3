import "./Filter.css";
import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    let languagesList = [];

    this.props.programmingLaunguagesList.forEach((language) => {
      languagesList.push(language);
    });

    this.state = {
      isChecked: false,
      programmingLaunguagesList: languagesList,
    };
  }

  handleClick = () => {
    let languagesList = [];

    this.props.programmingLaunguagesList.forEach((language) => {
      languagesList.push(language);
    });

    this.setState(
      {
        isChecked: !this.state.isChecked,
      },
      () => {
        if (this.state.isChecked) {
          this.setState({
            programmingLaunguagesList: languagesList.sort(),
          });
        } else {
          this.setState({
            programmingLaunguagesList: this.props.programmingLaunguagesList,
          });
        }
      }
    );
  };

  handleChange = (e) => {
    let languagesList = [];

    this.props.programmingLaunguagesList.forEach((language) => {
      languagesList.push(language);
    });

    languagesList.sort();

    const resultList = languagesList.filter((word) =>
      word.toLowerCase().includes(e.target.value)
    );

    this.setState({
      programmingLaunguagesList: resultList,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            defaultChecked={this.state.isChecked}
            onClick={this.handleClick}
          />
          <input type="text" onChange={this.handleChange} />
          <input type="button" value="Reset" />
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
