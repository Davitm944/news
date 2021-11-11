import { makeStyles } from '@mui/styles';
import newsLogo from '../Components/Images/newslogo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BrowserRouter as Switch, Route, Redirect, useNavigate } from 'react-router-dom';
import {
	COVID_ROUTE,
	HOME_ROUTE,
	LATEST_ROUTE,
	POLITIC_ROUTE,
	SCIENCE_ROUTE,
	SIGN_IN_ROUTE,
	SPORT_ROUTE
} from './Routes';
import { editHasAccount, selectHasAccount } from '../redux/hasAccountSlice';
import { useDispatch, useSelector } from 'react-redux';
import fire from '../fire';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { useEffect, useMemo, useState } from 'react';
import { TextField } from '@mui/material';
import { editTerm, selectTerm } from '../redux/termSlice';

const useStyles = makeStyles({
	header      : {
		backgroundColor : '#000',
		display         : 'flex',
		alignItems      : 'center',
		justifyContent  : 'space-between'
	},
	img         : {
		margin : '15px 35px'
	},
	icon        : {
		fontSize    : 'x-large',
		color       : '#fff',
		marginRight : '15px'
	},
	sign        : {
		color   : '#fff',
		display : 'flex'
	},
	signInBtn   : {
		marginLeft : '5px',
		cursor     : 'pointer'
	},
	nav         : {
		color       : '#fff',
		display     : 'flex',
		marginRight : '15px'
	},

	headerInner : {
		display     : 'flex',
		marginRight : '35px'
	},
	navLink     : {
		margin    : '0px 10px',
		cursor    : 'pointer',
		color     : '#fff',
		opacity   : '0,7',

		'&:hover' : {
			color        : '#858585',
			transition   : ' .2s linear',
			borderBottom : '#fff 1px solid'
		}
	},
	signOutBtn  : {
		cursor : 'pointer'
	}
});

function Header() {
	const navigate = useNavigate();
	const classes = useStyles();
	const dispatch = useDispatch();
	const hasAccount = useSelector(selectHasAccount);

	const onSignout = () => {
		fire.auth().signOut();
		dispatch(editHasAccount(false));
	};
	return (
		<div className={classes.header}>
			<span>
				<img src={newsLogo} alt='Logo' className={classes.img} />
			</span>
			<div className={classes.headerInner}>
				<span className={classes.nav}>
					<a
						className={classes.navLink}
						onClick={() => {
							navigate(HOME_ROUTE);
							dispatch(editTerm('All'));
						}}>
						Home
					</a>
					<a className={classes.navLink} onClick={() => dispatch(editTerm('Latest'))}>
						Latest
					</a>
					<a className={classes.navLink} onClick={() => dispatch(editTerm('Politics'))}>
						Politics
					</a>
					<a className={classes.navLink} onClick={() => dispatch(editTerm('Sport'))}>
						Sport
					</a>
					<a className={classes.navLink} onClick={() => dispatch(editTerm('Science'))}>
						Science
					</a>
					<a className={classes.navLink} style={{ color: 'red' }} onClick={() => dispatch(editTerm('Covid'))}>
						Covid-19
					</a>
				</span>
				<span className={classes.sign}>
					<AccountCircleOutlinedIcon className={classes.icon} />
					{
						hasAccount ? <ExitToAppIcon onClick={onSignout} className={classes.signOutBtn} /> :
						<a className={classes.signInBtn} onClick={() => navigate(SIGN_IN_ROUTE)}>
							Sign In
						</a>}
				</span>
			</div>
		</div>
	);
}

export default Header;
