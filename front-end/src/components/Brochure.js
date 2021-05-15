import { Button, Card } from '@material-ui/core';
import React from 'react';
import './Brochure.css';

function Brochure() {
	return (
		<div className='card'>
			<Card>
				<div className='card1'>
					<div className='card__heading1'>
						<h1>Gendral Service</h1>
						<h2>99</h2>
					</div>

					<div className='details'>
						<div>
							<h3>gendral service include with</h3>
							<h6></h6>
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
