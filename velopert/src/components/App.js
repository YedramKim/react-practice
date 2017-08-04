import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {
	render() {
		let text = 'JSX';
		let style = {
			color: 'aqua',
			backgroundColor: 'black'
		};
		let elements = [];
		for(let i = 0; i < 10; i++) {
			elements.push(<p key={i}>{i}</p>);
		}
		return (
			<div>
				<Header />
				<Content />
				{elements}
			</div>
		);
	}
}

export default App;