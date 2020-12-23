/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import Header from './components/Header/Header';
// import Hamburger from './components/Hamburger/Hamburger';
// import Title from './components/Title/Title';
// import Nav from './components/Nav/Nav';
import { Router } from "@reach/router";
import image from "../images/Matt.svg";

import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Burger from "./components/Burger/Burger";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import Home from "./components/Home/Home";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleWindowResize = () => {
    //
  };

  componentDidMount() {
    this.setState({
      innerWidth: window.innerWidth,
      showMobileView: window.innerWidth <= 900
    });
    window.addEventListener("resize", () => {
      this.setState((prevState) => {
        return {
          ...prevState,
          innerWidth: window.innerWidth,
          showMobileView: window.innerWidth <= 900
        };
      });
    });
  }

  toggleMenu = () => {
    this.setState((state) => {
      return {
        ...state,
        isOpen: !state.isOpen
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <div className="header header__wrapper">
              <HeaderLogo image={image} />
              <Burger toggleMenu={this.toggleMenu} isOpen={this.state.isOpen} />
            </div>
            <Nav isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
          </header>

          <main tabIndex="0">
            <Router>
              <Home path="/" />
              <Blog path="blog" />

              {/* <Demos path="apps" apps={["app1", "app2", "app3", "app4"]} /> */}
              {/* <Player path="music" /> */}
            </Router>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
