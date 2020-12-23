const HeaderLogo = ({ image }) => {
  return (
    <div className="header header__logo">
      <img
        width={640}
        height={320}
        src={image}
        alt=""
        className="header__logo header__image"
      />
      <h1 className="header__logo header__title">
        Matt <span>&nbsp;Brannon</span>
      </h1>
    </div>
  );
};

export default HeaderLogo;
