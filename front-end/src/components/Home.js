import { Card } from '@material-ui/core';
import React from 'react';
import ImageSlider from './ImageSlider';
import './Home.css'

function Home() {
	return (
		<div className='home'>
			<ImageSlider />
            <div className="card">
			<Card>hello</Card>
            </div>
		</div>
	);
}

export default Home;
