import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
	let setting = {
		dots: true,
		infinite: true,
		speed: 500,
		slideToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<Carousel {...setting}>
			{/* <Warp>
				<img src='/img/3b191d1c-df4b-432f-a721-b5aafeee0b68.jpg' alt='' />
			</Warp> */}
			<Warp>
				<img src='/img/43ea2415-5b67-43df-b577-265ec4ebe57e.jpg' alt='' />
			</Warp>
			<Warp>
				<img src='/img/f5f08688-b585-4300-9639-50c02cb1ec12.jpg' alt='' />
			</Warp>
		</Carousel>
	);
}

export default ImageSlider;
const Carousel = styled(Slider)`
	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button::before {
		color: white;
	}

	.slick-list {
		overflow: visible;
	}
	button {
		z-index: 1;
	}
`;

const Warp = styled.div`
	cursor: pointer;
	img {
		border: 1px solid transparent;
		border-radius: 10px;
		width: 100%;
		opacity: 0.8;
		height: 100%;
		box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
			rgb(0 0 0 /73%) 0px 16px 10px -10px;

		/* &:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		} */
	}
`;
