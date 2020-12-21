import image from '../../../images/Matt.png';
import './Title.css';
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

export default Title;
