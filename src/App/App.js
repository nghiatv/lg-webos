import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import kind from '@enact/core/kind'
import Home from '../views/Home/index';
import Login from '../views/Login/index'
import OTP from '../views/OTP/index'
import Category from '../views/Category/index'
import css from './App.less';
import AppStateDecorator from './AppStateDecorator';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

class App extends Component {
	static propTypes = {

	}
	componentDidMount = async () => {
		await this.props.loadHome()
	}

	render = () => {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/otp" component={OTP} />
					<Route path="/category" component={Category} />
				</div>
			</Router>
		)
	}
}


export default MoonstoneDecorator(AppStateDecorator(App));
