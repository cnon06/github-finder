import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.keyword === "") {
      this.props.displayAlert("pls enter a keyword", "warning");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }

    //  console.log(this.state.keyword);
  };
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              onChange={this.onChange}
              value={this.state.keyword}
              type="text"
              className="form-control"
              placeholder="Kew Word"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </form>

        {!this.props.activateClearButton && (
          <button
            className="btn btn-outline-danger mt-2 btn-block"
            onClick={this.props.clearResults}
          >
            Clear Results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
