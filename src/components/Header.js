/* eslint-disable jsx-a11y/alt-text */
import './Header.css';
import image from '../images/Matt.png';
import Hamburger from './Hamburger';
import { Component } from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <div className="link">Home</div>
      <div className="link">Apps</div>
      <div className="link">Personal</div>
      <div className="link">Music</div>
      <div className="link">Random</div>
    </div>
  );
};

const Title = () => {
  return (
    <>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h1 className="title">
        matt <span>Brannon</span>
      </h1>
    </>
  );
};

class Header extends Component {
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
    this.setState({
      width: window.innerWidth,
    });
    this.handleWindowResize();
  }

  render() {
    return (
      <div className="header">
        <div className="inner">
          <Title />
          {this.state.width <= 768 ? <Hamburger /> : <Nav />}
        </div>
      </div>
    );
  }
}

export default Header;
