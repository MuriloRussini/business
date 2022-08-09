import React, { Component } from 'react';
let imgs = [
	'https://www.suno.com.br/wp-content/uploads/2019/01/out-of-the-money-1024x683.jpg'
];

const imgURL = () => {
	<div>
		<img src={imgs[0]} />
	</div>;
};

// maybe try using the variable name in the imgs[] to fix when more images being used

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
							<iframe
								allowfullscreen
								width="560"
								height="315"
								src="https://www.youtube.com/embed/_JaYgiqOZWU?autoplay=1&mute=1"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							></iframe>
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
						<div className="jumbo-slider__slide-timeline">
							<div className="jumbo-slider__slide-line"></div>
						</div>
					</li>
					<li className="jumbo-slider__slide">
						<div className="jumbo-slider__slide-bg" style={imgURL}></div>
						<div className="jumbo-slider__info-container">
							<div className="jumbo-slider__info">
								<div className="jumbo-slider__slide-number">02</div>
								<div className="jumbo-slider__slide-title">Creampie</div>
								<p className="jumbo-slider__slide-description">
									YADAADAYADYAYAYAYAYAYASDYAAYAYAYAYAYA
								</p>
							</div>
						</div>
						<div className="jumbo-slider__slide-timeline">
							<div className="jumbo-slider__slide-line"></div>
						</div>
					</li>
					<li className="jumbo-slider__slide">
						<div className="jumbo-slider__slide-bg">
							<img src="https://www.suno.com.br/wp-content/uploads/2019/01/out-of-the-money-1024x683.jpg">
								{/* I believe I'll have to make a component for this bs to work */}
							</img>
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
						<div className="jumbo-slider__slide-timeline">
							<div className="jumbo-slider__slide-line"></div>
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
