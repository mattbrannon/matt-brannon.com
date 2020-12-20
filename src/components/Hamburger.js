import React, { Component } from 'react';
import './Hamburger.css';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleBurgerClick = () => {
    this.setState(state => {
      return {
        ...state,
        isClicked: !state.isClicked,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.handleBurgerClick}
          className={this.state.isClicked ? 'active' : 'inactive'}
        >
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hamburger;
