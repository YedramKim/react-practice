import React, { Component } from 'react';

class GameInput extends Component {
	constructor (props) {
		super(props);

		this.state = {
			title: '',
			year: '',
			v1: ''
		};

		this._formSubmit = this._formSubmit.bind(this);
		this._getValueInput = this._getValueInput.bind(this);
	}
	_getValueInput ({target}) {
		this.setState({
			[target.name]: target.value
		});
	}
	_formSubmit () {
		this.props.submitHandler(this.state.title, this.state.year);
	}
	componentWillReceiveProps ({v1}) {
		this.setState({
			v1
		});
	}
	render () {
		return (
			<div>
				<input type="text" value={this.state.v1}/>
				<input type="text" name="title" placeholder="title" onChange={this._getValueInput} value={this.state.title} />
				<input type="text" name="year" placeholder="year" onChange={this._getValueInput} value={this.state.year} />
				<button onClick={this._formSubmit}>제출</button>
			</div>
		);
	}
};

export default GameInput;
