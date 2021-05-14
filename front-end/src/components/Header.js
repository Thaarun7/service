import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
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
			</div>
		</div>
	);
}

export default Header;
