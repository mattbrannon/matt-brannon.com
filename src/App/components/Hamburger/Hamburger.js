import React from 'react';
import './Hamburger.css';

const Hamburger = ({ onClick, isActive }) => {
  return (
    <div onClick={onClick} className={isActive ? 'active' : 'inactive'}>
      <div className="line" id="line1"></div>
      <div className="line" id="line2"></div>
      <div className="line" id="line3"></div>
    </div>
  );
};

export default Hamburger;

// import Nav from '../Nav/Nav';

// class Hamburger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentMode: null,
//       isClicked: false,
//     };
//   }

//   // componentDidMount() {

//   // }

// handleBurgerClick = () => {
//   this.setState(state => {
//     return {
//       ...state,
//       isClicked: !state.isClicked,
//     };
//   });
// };

//   render() {
//     return (
//       <>
//         {this.state.isClicked ? <Nav /> : null}
//         <div
//           onClick={this.handleBurgerClick}
//           className={this.state.isClicked ? 'active' : 'inactive'}
//         >
//           <div className="line" id="line1"></div>
//           <div className="line" id="line2"></div>
//           <div className="line" id="line3"></div>
//         </div>
//       </>
//     );
//   }
// }

// export default Hamburger;
