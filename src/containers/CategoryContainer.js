import { connect } from 'react-redux';

import RR from '../actions/actions';

const mapStateToProps = ({ CategoryReducer }) => {
  // console.log(CategoryReducer)
  return {
    data: CategoryReducer.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategory: (payload) => dispatch(RR.categoryActions.loadCategory(payload)),
  };
};

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps);

export default CategoryContainer;
export { CategoryContainer };