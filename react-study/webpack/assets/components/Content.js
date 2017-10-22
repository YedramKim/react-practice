import React, { Component } from 'react';
import GameInfo from './GameInfo';
import GameInput from './GameInput';

class Content extends Component {
	constructor (props) {
		super(props);
	}
	pushGameList (title, year) {

	}
	render () {
		return (
			<div>
				<p>
					title: {this.props.content}
				</p>
				<p>
					주인공: <b>{this.props.character}</b>
				</p>
				<GameInput submitHandler={this.pushGameList.bind(this)} />
				{this.props.gameList.map((game, idx) => {
						return (<GameInfo key={idx} {...game} />);
					})}
			</div>
		);
	}
};

export default Content;
