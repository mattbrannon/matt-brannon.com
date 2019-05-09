import React, { Component } from "react";
import SideNav from "./components/SideNav";
import CodeSnippet from "./components/CodeSnippet";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <div className="main">
          <h2>About me</h2>
          <p>My name is Matt Brannon. I build stuff.</p>
          <h2>Instantiation patterns</h2>
          <CodeSnippet />
        </div>
      </div>
    );
  }
}

export default App;
