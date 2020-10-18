import React, { Component } from "react";
import betTracker from "./betTrackerNEW.jpg";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={betTracker} alt="logo" />
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
