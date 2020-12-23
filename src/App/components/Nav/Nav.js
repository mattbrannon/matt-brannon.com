/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@reach/router";
const Nav = ({ isOpen, toggleMenu }) => {
  return (
    <nav
      className={
        isOpen
          ? "header header__nav nav__open"
          : "header header__nav nav__closed"
      }
      onClick={toggleMenu}
    >
      <Link to="/">
        <div className="header__nav nav__item">Home</div>
      </Link>
      <Link to="blog">
        <div className="header__nav nav__item">Blog</div>
      </Link>
      <Link to="apps">
        <div className="header__nav nav__item">Apps</div>
      </Link>
      <Link to="music">
        <div className="header__nav nav__item">Music</div>
      </Link>
      <Link to="contact">
        <div className="header__nav nav__item">Contact</div>
      </Link>
    </nav>
  );
};

export default Nav;
