
import { connect } from 'react-redux';
import Nav from '../components/Nav'

const mapStateToProps = ({ HomeReducer }) => {
  return {
    home: HomeReducer.home
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCountryChange: ({ }) => {
//     }
//   };
// };

const NavContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Nav);

export default NavContainer;