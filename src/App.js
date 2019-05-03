import React, { Component } from "react";
import SideNav from "./components/SideNav";
import "./App.css";

// const getData = url => {
//   fetch(url)
//     .then(data => data.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error));
// };

class App extends Component {
  state = {
    todos: ""
  };
  getData = url => {
    fetch(url)
      .then(data => data.json())
      .then(json =>
        this.setState({
          todos: json
        })
      )
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.getData("https://jsonplaceholder.typicode.com/todos/1");
  }

  render() {
    return (
      <div className="App">
        <SideNav />

        <div className="main">
          <h2>About me</h2>
          <p>My name is Matt Brannon. I build stuff.</p>
        </div>
      </div>
    );
  }
}

export default App;
