import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userAction.js';

function Header() {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<div className='header'>
			<img
				className='header__icon'
				src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
				alt=''
			/>
			<div className='header__right'>
				<Link href to='/order' className=' header__icons'>
					<MailOutlineIcon />
				</Link>

				<Link href to='/login' className='header__icons'>
					<Avatar />	
				</Link>
				{userInfo ? (
					<NavDropdown title={userInfo.name} id='username
					'>
						<LinkContainer to='/profile'>
							<NavDropdown.Item>Profile</NavDropdown.Item>
						</LinkContainer>
						<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
					</NavDropdown>
				) : (
					<LinkContainer to='/login'>
						<Nav.Link>
							<i className='fas fa-user'></i> Sign In
						</Nav.Link>
					</LinkContainer>
				)}
			</div>
		</div>
	);
}

export default Header;
