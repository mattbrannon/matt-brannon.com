import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hamburger from './components/Hamburger/Hamburger';
import Title from './components/Title/Title';
import Nav from './components/Nav/Nav';
// import { Router, Link } from '@reach/router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  handleWindowResize() {
    window.addEventListener('resize', () => {
      this.setState(prevState => {
        return {
          ...prevState,
          width: window.innerWidth,
          isMobile: window.innerWidth <= 768,
        };
      });
    });
  }

  onClick = () => {
    this.setState(state => {
      return {
        ...state,
        isActive: !state.isActive,
      };
    });
  };

  componentDidMount() {
    const isMobile = window.innerWidth <= 768;
    this.setState({ isMobile });
    this.handleWindowResize();

    // this.setState({
    //   isMobile: window.innerWidth <= 768,
    // });
    // this.handleWindowResize();
  }

  render() {
    return (
      <div className="App">
        <Header>
          {this.state.isMobile && this.state.isActive ? (
            <>
              <Nav />
              <Hamburger
                onClick={this.onClick}
                isActive={this.state.isActive}
              />
            </>
          ) : this.state.isMobile && !this.state.isActive ? (
            <>
              <Title />
              <Hamburger
                onClick={this.onClick}
                isActive={this.state.isActive}
              />
            </>
          ) : null}
        </Header>
      </div>
    );
  }
}

export default App;

// {

// }
