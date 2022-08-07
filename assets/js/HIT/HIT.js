import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Jumbo from './Jumbo';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div>
				<Header />
				<section>
					{/* BIG JUMBO SECTION */}
					<Jumbo />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
