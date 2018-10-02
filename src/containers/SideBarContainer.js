import { connect } from 'react-redux';
import SideBar from '../components/SideBar';

const mapStateToProps = ({ CategoryReducer }) => {
	return {
		data: CategoryReducer.data
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	};
};

const SideBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SideBar);

export default SideBarContainer;