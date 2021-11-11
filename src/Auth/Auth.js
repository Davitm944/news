/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Switch, Route, useNavigate, Routes, useLocation } from 'react-router-dom';

import fire from '../fire';
import { editHasAccount } from '../redux/hasAccountSlice';
import { HOME_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '../Components/Routes';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from '../Components/Main';
function Auth() {
	// eslint-disable-next-line no-unused-vars
	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ emailError, setEmailError ] = useState('');
	const [ passwordError, setPasswordError ] = useState('');
	const [ hasAccount, setHasAccount ] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	const dispatch = useDispatch();
	const clearInputs = () => {
		setEmail('');
		setPassword('');
	};

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleLogin = () => {
		clearErrors();
		fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
			switch (err.code) {
				case 'auth/invalid-email':
				case 'auth/user-disabled':
				case 'auth/user-not-found':
					setEmailError(err.message);
					break;
				case 'auth/wrong-password':
					setPasswordError(err.message);
					break;
			}
		});
	};

	const handleSignup = () => {
		clearErrors();
		fire.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
			switch (err.code) {
				case 'auth/email-already-in-use':
				case 'auth/invalid-email':
					setEmailError(err.message);
					break;
				case 'auth/weak-password':
					setPasswordError(err.message);
					break;
			}
		});
	};

	const onSignout = () => {
		fire.auth().signOut();
		dispatch(editHasAccount(false));
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
				dispatch(editHasAccount(true));
				alert(user);
				navigate(HOME_ROUTE);
			} else {
				setUser('');
			}
		});
	};

	useEffect(() => {
		authListener();
		alert(location.pathname);
	}, []);

	return (
		<Routes>
			{alert('ds')}
			<Route
				path={SIGN_IN_ROUTE}
				element={
					<SignIn
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						handleLogin={handleLogin}
						handleSignup={handleSignup}
						hasAccount={hasAccount}
						setHasAccount={setHasAccount}
						emailError={emailError}
						passwordError={passwordError}
					/>
				}
			/>
			<Route
				path={SIGN_UP_ROUTE}
				element={
					<SignUp
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						handleLogin={handleLogin}
						handleSignup={handleSignup}
						hasAccount={hasAccount}
						setHasAccount={setHasAccount}
						emailError={emailError}
						passwordError={passwordError}
					/>
				}
			/>
		</Routes>
	);
}

export default Auth;
