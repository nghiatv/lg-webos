import { connect } from 'react-redux';

import RR from '../../actions';

const mapStateToProps = ({ HomeReducer }) => {
  // console.log(HomeReducer.home)
  return {
    home: HomeReducer.home
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHome: () => dispatch(RR.homeActions.loadHome()),
  };
};

const AppStateDecorator = connect(mapStateToProps, mapDispatchToProps);

export default AppStateDecorator;
export { AppStateDecorator };