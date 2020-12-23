/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import Header from './components/Header/Header';
// import Hamburger from './components/Hamburger/Hamburger';
// import Title from './components/Title/Title';
// import Nav from './components/Nav/Nav';
// import { Router, Link } from '@reach/router';
import image from "../images/Matt.png";

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
              <div className="header header__logo">
                <img
                  src={image}
                  alt=""
                  className="header__logo header__image"
                />
                <h3 className="header__logo header__title">Matt Brannon</h3>
              </div>
              <div
                onClick={this.toggleMenu}
                className={
                  this.state.isOpen
                    ? "header header__burger header__burger-active"
                    : "header header__burger header__burger-inactive"
                }
              >
                <div className="header__burger burger__line" id="line1"></div>
                <div className="header__burger burger__line" id="line2"></div>
                <div className="header__burger burger__line" id="line3"></div>
              </div>
            </div>
            <nav
              className={
                this.state.isOpen
                  ? "header header__nav nav__open"
                  : "header header__nav nav__closed"
              }
            >
              <a href="#" className="header__nav nav__item">
                Home
              </a>
              <a href="#" className="header__nav nav__item">
                Blog
              </a>
              <a href="#" className="header__nav nav__item">
                Apps
              </a>
              <a href="#" className="header__nav nav__item">
                Music
              </a>
              <a href="#" className="header__nav nav__item">
                Contact
              </a>
            </nav>
          </header>
          <main>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              recusandae voluptas iure aliquid at quod sequi soluta
              necessitatibus ipsum, laborum accusantium ratione nemo vero.
              Pariatur dicta adipisci quia vel neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam sed aut illo expedita
              laboriosam quibusdam rem veritatis quaerat consectetur vero
              praesentium cupiditate ab eaque, voluptatum quo? Aut laudantium
              veritatis optio. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur reiciendis voluptatibus magni dolorum
              harum. Eligendi sapiente aut amet eveniet ratione labore! Maxime
              blanditiis eius nihil, unde ratione modi voluptatum magni.
            </p>
          </main>
          <footer>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
