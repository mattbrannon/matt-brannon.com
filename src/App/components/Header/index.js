import './Header.css';

// import Hamburger from '../Hamburger/Hamburger';
// import Nav from '../Nav/Nav';
// import Title from '../Title/Title';

const Header = ({ isMobile, children }) => {
  return (
    <div className="header">
      <div className="inner">
        {children}
        {/* {isMobile ? <Hamburger /> : <Nav />} */}
      </div>
    </div>
  );
};

export default Header;
