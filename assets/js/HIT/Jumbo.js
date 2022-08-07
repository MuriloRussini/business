import React, { Component } from 'react';

export default class Jumbo extends Component {
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
			<section className="jumbo">
				<div>Logo</div>
				<nav>
					<a href="#">Case Studies</a>
					<a href="#">Testimonials</a>
					<a href="#">About Us</a>
					<a href="#">Contact</a>
				</nav>
			</section>
		);
	}
}
