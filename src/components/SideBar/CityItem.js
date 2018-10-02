import { connect } from 'react-redux';
import Divider from '@enact/moonstone/Divider';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import SelectableItem from '@enact/moonstone/SelectableItem';

const CityItem = kind({
	name: 'CityItem',

	propTypes: {
		city: PropTypes.object.isRequired,
		onMenuChange: PropTypes.func,
		selected: PropTypes.bool
	},

	render: ({ city, onMenuChange, selected, ...rest }) => {
		return (
			<div {...rest}>
				<SelectableItem
					onToggle={onMenuChange}
					selected={selected}
					value={city.name}
				>
					{city.name}
				</SelectableItem>
				<Divider />
			</div>
		);
	}
});

// const mapStateToProps = (state, ownProps) => {
// 	const country = state.country;
// 	const city = ownProps.city
// 		.split(' ')
// 		.join('')
// 		.toLowerCase();

// 	return city in state.data[country] ? { selected: state.data[country][city].selected } : { selected: false };
// // };

// const CityItemContainer = connect(mapStateToProps, {})(CityItem);

// export default CityItemContainer;

export default CityItem