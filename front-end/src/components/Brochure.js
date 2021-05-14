import { Button, Card } from '@material-ui/core';
import React from 'react';
import './Brochure.css';

function Brochure() {
	return (
		<div className='card'>
			<Card>
				<div className='card1'>
					<h1 className='card__heading1'>Gendral Service</h1>

					<div className='details'>
						<h3>
							gendral service include with
							<ol>
								<li>oil change</li>
								<li>water service</li>
							</ol>
						</h3>
						<Button className="button">book</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Brochure;
