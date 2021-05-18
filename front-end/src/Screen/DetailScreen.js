import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveServiceDetail } from '../actions/detailAction';

const DetailScreen = ({ history }) => {
	const detail = useSelector((state) => state.detail);
	const { serviceDetail } = detail;

	const [brand, setBrand] = useState(serviceDetail.brand);
	const [model, setModel] = useState(serviceDetail.model);
	const [regNumber, setRegNumber] = useState(serviceDetail.regNumber);
	const [mobileNumber, setMobileNumber] = useState(serviceDetail.mobileNumber);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveServiceDetail({ brand, model, regNumber, mobileNumber }));
		history.push('/payment');
	};

	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='brand'>
					<Form.Label>brand</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter brand'
						value={brand}
						required
						onChange={(e) => setBrand(e.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='model'>
					<Form.Label>model</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter model'
						value={model}
						required
						onChange={(e) => setModel(e.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='regNumber'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter postal code'
						value={regNumber}
						required
						onChange={(e) => setRegNumber(e.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='mobileNumber'>
					<Form.Label>mobileNumber</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter mobileNumber'
						value={mobileNumber}
						required
						onChange={(e) => setMobileNumber(e.target.value)}></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default DetailScreen;
