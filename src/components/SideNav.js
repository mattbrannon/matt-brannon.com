import React from "react";
import { Router, Link } from "@reach/router";

const SideNav = () => (
  <Router>
    <div className="sidenav">
      <img
        src="https://avatars2.githubusercontent.com/u/36570183"
        alt="profile"
      />

      {/* <a href="#">About</a> */}
      <a href="https://github.com/ghostrib" target="_blank">
        Github
      </a>
      <a href="mailto:sh4rkbot@gmail.com" target="_top">
        Contact
      </a>
    </div>
  </Router>
);

export default SideNav;
