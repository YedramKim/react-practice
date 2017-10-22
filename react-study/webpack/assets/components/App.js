import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
// 15.5 이상부터는 prop-types 라이브러리 이용
// https://github.com/facebook/prop-types 참고
import PropTypes from 'prop-types';
import update from 'react-addons-update';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			headerTitle: 'Legend of Zelda',
			games: [
				{
					title: 'Ocarina of Time',
					year: 1998
				},
				{
					title: 'Wind Waker',
					year: 2002
				},
				{
					title: 'Twilight Princess',
					year: 2006
				},
				{
					title: 'Skyward Sword',
					year: 2011
				},
				{
					title: 'Breath of the Wild',
					year: 2016
				}
			]
		};
		const newGame = {
			title: '신들의 트라이포스',
			year: 1992
		};
		setTimeout(() => {
			this.setState({
				games: update(
					this.state.games,
					{
						$push: [newGame],
						4: {
							title: {
								$set: '야숨'
							}
						}
					}
				)
			});
		}, 1000);
	}
	_updateTitle () {
		this.setState({
			headerTitle: 'Legend of Link'
		});
	}
	render () {
		return [
			<Header title={this.state.headerTitle} key="1"/>,
			<Content
				content={this.props.contentBody}
				character={this.props.character}
				time={this.state.time}
				gameList={this.state.games}
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
