import { Button, Card } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Brochure.css';

function Brochure({ bro }) {
	return (
		<div className='card'>
			<Card>
				<div className='card1'>
					<div className='card__heading1'>
						<h1>{bro.heading}</h1>
						<h2>{bro.price}</h2>
					</div>

					<div className='details'>
						<div>
							<h5>{bro.description}</h5>
						</div>
						<div className='button'>
							<Button>book</Button>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Brochure;
