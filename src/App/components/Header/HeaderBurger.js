const Hamburger = ({ onClick, isActive }) => {
  return (
    <div onClick={onClick} className={isActive ? "active" : "inactive"}>
      <div className="line" id="line1"></div>
      <div className="line" id="line2"></div>
      <div className="line" id="line3"></div>
    </div>
  );
};

export default Hamburger;
