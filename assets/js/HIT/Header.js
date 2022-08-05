import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	// clickedBtn = () => {};
	// async test() {}
	render() {
		return (
			<header>
				<div>Logo</div>
				<nav>
					<a href="#">Case Studies</a>
					<a href="#">Testimonials</a>
					<a href="#">About Us</a>
					<a href="#">Contact</a>
				</nav>
			</header>
		);
	}
}
