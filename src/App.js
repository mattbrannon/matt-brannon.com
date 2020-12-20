import React, { Component } from 'react';
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import { Router, Link } from '@reach/router';

class App extends Component {
  state = {};

  handleWindowResize() {
    window.addEventListener('resize', () => {
      this.setState(prevState => {
        return {
          ...prevState,
          width: window.innerWidth,
        };
      });
    });
  }

  componentDidMount() {
    // this.handleWindowResize();
    console.log(window.innerWidth);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
