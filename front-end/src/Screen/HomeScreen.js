import React from 'react';
import { useEffect } from 'react';
import Brochure from '../components/Brochure';
import ImageSlider from '../components/ImageSlider';
import './HomeScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Message';
import { listBrochures } from '../actions/brochureAction';

const Home = () => {
	const dispatch = useDispatch();
	const brochureList = useSelector((state) => state.brochureList);
	const { loading, error, brochures } = brochureList;

	useEffect(() => {
		dispatch(listBrochures());
	}, [dispatch]);

	return (
		<>
			<div className='home'>
				<ImageSlider />
				<h1 className='home__heading1'>Shedule your service</h1>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<div>
						{brochures.map((bro) => (
							<Brochure key={bro._id} bro={bro}></Brochure>
						))}
					</div>
				)}
			</div>
		</>
	);
};
export default Home;
