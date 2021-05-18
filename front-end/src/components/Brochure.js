import { Button, Card } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './Brochure.css';

function Brochure({ bro }) {
	const history = useHistory();
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
							<Button
								onClick={() =>
									history.push('/login?redirect=details', { from: '/' })
								}>
								book
							</Button>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Brochure;
