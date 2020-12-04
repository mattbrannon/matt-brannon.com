import React, { Component } from "react";
// import SideNav from "./components/SideNav";
// import { Router, Link } from "@reach/router";

//import CodeSnippet from "./components/CodeSnippet";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          header goes here
          <nav>
            <ul>
              <li className="link"><a href="https://github.com/ghostrib">github</a></li>
              <li className="link"><a href="https://ghostrib.com/">the other side</a></li>
              <li className="link"><a href=""></a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
