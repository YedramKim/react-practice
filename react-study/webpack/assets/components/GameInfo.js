import React, { Component } from 'react';

class GameInfo extends Component {
	constructor (props) {
		super(props);

		this._callHandler = this._callHandler.bind(this);
	}
	_callHandler () {
		this.props.clickHandler(this.props.listIndex);
	}
	_setStyle (bool) {
		return bool ? {
			fontWeight: 'bold',
			color: '#4efcd8'
		} : {};
	}
	shouldComponentUpdate (nextProps, nextState) {
		return !(this.props.title === nextProps.title && this.props.year === nextProps.year === this.props.selected === nextProps.selected);
	}
	render () {
		console.log(this.props.title, 'rendering');
		return (
			<p style={this._setStyle(this.props.selected)} onClick={this._callHandler}>
				{this.props.title}({this.props.year})
			</p>
		);
	}
}

export default GameInfo;