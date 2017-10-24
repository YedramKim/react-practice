import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
// 15.5 이상부터는 prop-types 라이브러리 이용
// https://github.com/facebook/prop-types 참고
import PropTypes from 'prop-types';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			headerTitle: 'Legend of Zelda'
		};
	}
	render () {
		return [
			<Header title={this.state.headerTitle} key="1"/>,
			<Content
				content={this.props.contentBody}
				character={this.props.character}
				key="2"/>
		];
	}
};

App.defaultProps = {
	character: 'Link'
};

App.propTypes = {
	// contentBody: PropTypes.string.isRequired,
	// character: PropTypes.string.isRequired
};

export default App;
