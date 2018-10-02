import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = ({ HomeReducer }) => {
  return ({
    home: HomeReducer.home
  });
};

const mapDispatchToProps = (dispatch) => ({

});

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;