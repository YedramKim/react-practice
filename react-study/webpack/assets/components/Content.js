import React, { Component } from 'react';
import update from 'react-addons-update';
import GameInfo from './GameInfo';
import GameInput from './GameInput';

class Content extends Component {
	constructor (props) {
		super(props);

		this.state = {
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
					title: '야숨',
					year: 2016
				}
			],
			selectedIndex: -1,
			data: {
				title: 'z'
			}
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
								$set: 'Breath of the Wild'
							}
						}
					}
				)
			});
		}, 1000);
	}
	_addGame (title, year) {
		this.setState({
			games: update(this.state.games,
			{
				$push: [{title, year}]
			})
		});
	}
	_selectedIndex (selectedIndex) {
		this.setState({
			selectedIndex
		});
	}
	_removeList () {
		this.setState({
			games: update(this.state.games, {
				$splice: [[this.state.selectedIndex, 1]]
			}),
			selectedIndex: -1
		});
	}
	_modifyList () {
		this.setState({
			games: update(this.state.games, {
				[this.state.selectedIndex]: {
					title: {
						$set: '수정됨...'
					}
				}
			})
		});
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
				<GameInput v1={this.state.data.title} submitHandler={this._addGame.bind(this)} />
				<button onClick={this._removeList.bind(this)}>삭제</button>
				<button onClick={this._modifyList.bind(this)}>수정</button>
				{this.state.games.map((game, idx) => {
						return (<GameInfo
											key={idx}
											listIndex={idx}
											selected={this.state.selectedIndex === idx}
											clickHandler={this._selectedIndex.bind(this)}
											{...game}
											/>);
					})}
			</div>
		);
	}
};

export default Content;
