import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Brochure from '../components/Brochure';
import ImageSlider from '../components/ImageSlider';
import './HomeScreen.css';
import axios from 'axios';

const Home = () => {
	const [brochures, setBrochures] = useState([]);

	useEffect(() => {
		const fetchBrochures = async () => {
			const { data } = await axios.get('/api/brochures');

			setBrochures(data);
		};
		fetchBrochures();
	}, []);

	return (
		<>
			<div className='home'>
				<ImageSlider />
				<h1 className='home__heading1'>Shedule your service</h1>

				{brochures.map((bro) => (
					<Brochure key={bro._id} bro={bro} />
				))}
			</div>
		</>
	);
};
export default Home;
