import React, { Component } from 'react';

import './App.css';
import image from './images/matt2.png';
// import ghost from './images/ghost-pixel-art.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="inner-header">
            <img className="profile-pic" src={image} alt="" />
            <div className="logo-container">
              <h1>
                Matt <span>Brannon</span>
              </h1>
            </div>
            <nav className="nav">
              <div className="link">
                <a href="https://github.com/ghostrib">github</a>
              </div>
              <div className="link">
                <a href="https://ghostrib.com/">the other side</a>
              </div>
              <div className="link">
                <a href="mailto:mattbrannon.dev@gmail.com" target="_top">
                  contact me
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="main">
          <div id="card-a" className="card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore ducimus, nobis beatae exercitationem
            cum quod delectus libero cupiditate earum veniam quasi laborum repellat at incidunt, quo quae assumenda
            aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel, saepe harum culpa aliquam
            deleniti cum possimus architecto voluptas sit! Recusandae ipsam dicta delectus perspiciatis, incidunt quae
            ea iste? Mollitia.
          </div>
          <div id="card-b" className="card">
            card2
          </div>
          <div id="card-c" className="card">
            card3
          </div>
          <div id="card-d" className="card">
            card4
          </div>
          <div id="card-e" className="card">
            card5
          </div>
        </div>
      </div>
    );
  }
}

export default App;
