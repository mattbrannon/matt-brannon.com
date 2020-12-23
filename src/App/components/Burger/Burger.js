const Burger = ({ toggleMenu, isOpen }) => {
  return (
    <div
      onClick={toggleMenu}
      className={
        isOpen
          ? "header header__burger header__burger-active"
          : "header header__burger header__burger-inactive"
      }
    >
      <div className="header__burger burger__line" id="line1"></div>
      <div className="header__burger burger__line" id="line2"></div>
      <div className="header__burger burger__line" id="line3"></div>
    </div>
  );
};

export default Burger;
