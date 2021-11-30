import "./Filter.css";
import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      programmingLaunguagesList: this.props.programmingLaunguagesList,
    };
  }

  handleClick = () => {
    this.setState(
      {
        isChecked: !this.state.isChecked,
      },
      () => {
        console.log(this.state.isChecked);
        if (this.state.isChecked) {
          this.setState({
            programmingLaunguagesList:
              this.state.programmingLaunguagesList.sort(),
          });
        } else {
          console.log(222, this.state.isChecked);
          console.log(333, this.props.programmingLaunguagesList);
          console.log(444, this.state.programmingLaunguagesList);

          this.setState({
            programmingLaunguagesList: this.props.programmingLaunguagesList,
          });
        }
      }
    );
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
          <input type="text" />
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

export default Filter;
