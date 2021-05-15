import React from 'react';
import Brochure from '../components/Brochure';
import ImageSlider from '../components/ImageSlider';
import './HomeScreen.css';
import brochures from '../brochures';

const Home = () => {
	return (
		<>
			<div className='home'>
				<ImageSlider />
				<Brochure />
			</div>
		</>
	);
};
export default Home;
