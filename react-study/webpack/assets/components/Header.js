import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	render () {
		return (
			<h1 ref={this._refCall.bind(this)}>
				{this.props.title}
			</h1>
		);
	}
	_refCall (...props) {
		console.log('_refCall');
		console.log(...props);
	}
	componentDidMount() {
		console.log('componentDidMount');
		console.log(this.refs);
	}
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;