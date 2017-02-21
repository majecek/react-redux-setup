import React, { Component } from "react";
import Stocks from "./../containers/stocks";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Stocks/>
      </div>
    );
  }
}

export default App;
