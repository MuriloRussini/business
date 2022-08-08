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
			<section className="jumbo-slider">
				<ul className="jumbo-slider__container">
					<li className="jumbo-slider__slide">
						<div className="jumbo-slider__slide-bg">
							<img src="https://www.suno.com.br/wp-content/uploads/2019/01/out-of-the-money-1024x683.jpg"></img>
						</div>
						<div className="jumbo-slider__info-container">
							<div className="jumbo-slider__info">
								<div className="jumbo-slider__slide-number">01</div>
								<div className="jumbo-slider__slide-title">Creampie</div>
								<p className="jumbo-slider__slide-description">
									YADAADAYADYAYAYAYAYAYASDYAAYAYAYAYAYA
								</p>
							</div>
						</div>
					</li>
					<li className="jumbo-slider__slide">
						<div className="jumbo-slider__slide-bg">
							<img src="https://www.suno.com.br/wp-content/uploads/2019/01/out-of-the-money-1024x683.jpg"></img>
						</div>
						<div className="jumbo-slider__info-container">
							<div className="jumbo-slider__info">
								<div className="jumbo-slider__slide-number">02</div>
								<div className="jumbo-slider__slide-title">Creampie</div>
								<p className="jumbo-slider__slide-description">
									YADAADAYADYAYAYAYAYAYASDYAAYAYAYAYAYA
								</p>
							</div>
						</div>
					</li>
					<li className="jumbo-slider__slide">
						<div className="jumbo-slider__slide-bg">
							<img src="https://www.suno.com.br/wp-content/uploads/2019/01/out-of-the-money-1024x683.jpg"></img>
						</div>
						<div className="jumbo-slider__info-container">
							<div className="jumbo-slider__info">
								<div className="jumbo-slider__slide-number">03</div>
								<div className="jumbo-slider__slide-title">Creampie</div>
								<p className="jumbo-slider__slide-description">
									YADAADAYADYAYAYAYAYAYASDYAAYAYAYAYAYA
								</p>
							</div>
						</div>
					</li>
				</ul>
				<div className="jumbo-slider__nav">
					<a href="#" className="jumbo-slider__link jumbo-slider__link--active">
						Case Studies
					</a>
					<a href="#" className="jumbo-slider__link">
						Testimonials
					</a>
					<a href="#" className="jumbo-slider__link">
						About Us
					</a>
				</div>
				<div className="jumbo-slider__elipses">
					<div className="jumbo-slider__circle jumbo-slider__circle--filled"></div>
					<div className="jumbo-slider__circle"></div>
					<div className="jumbo-slider__circle"></div>
				</div>
			</section>
		);
	}
}
