import React, { Component } from "react";
import SideNav from "./components/SideNav";
import "./App.css";

function createPlayer(name, score) {
  var player = {};
  player.name = name;
  player.score = score;
  player.increment = function() {
    this.score++;
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <div className="main">
          <h2>About me</h2>
          <p>My name is Matt Brannon. I build stuff.</p>
          <h2>Instantiation patterns</h2>
          <code>
            <pre>
              <p className="snippet">
                {`
  function createPlayer(name, score){
    var player = {};
    player.name = name;
    player.score = score;
    player.increment = function() {
      this.score++;
    };
  }
  `}
              </p>
            </pre>
          </code>
        </div>
      </div>
    );
  }
}

export default App;
