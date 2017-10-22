import React, { Component } from 'react';

class GameInfo extends Component {
	render () {
		return (
			<p>
				{this.props.title}({this.props.year})
			</p>
		);
	}
}

export default GameInfo;