/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';

import './Login.css';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '../Components/Routes';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function SignUp(props) {
	const { setEmail, setPassword, handleSignup, emailError, passwordError } = props;
	const navigate = useNavigate();

	const onEmailType = (e) => {
		setEmail(e.target.value);
	};
	const onPasswordType = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div class='bg-img'>
			<div class='content'>
				<header>Hello!</header>
				<form action='#'>
					<div class='field'>
						<span class='fa fa-user'>
							<PersonIcon />
						</span>
						<input type='text' placeholder='Email address' onChange={onEmailType} />
					</div>
					<span class='errorMessage'>{emailError}</span>
					<div class='field space'>
						<span class='fa fa-lock'>
							<LockIcon />
						</span>
						<input type='password' class='pass-key' placeholder='Password' onChange={onPasswordType} />
					</div>
					<span class='errorMessage'>{passwordError}</span>

					<div class='pass'>
						<span />
					</div>
					<div class='field'>
						<input type='submit' value='Sign Up' onClick={handleSignup} />
					</div>
				</form>
				<div class='login'>Or sign up with</div>
				<div class='links'>
					<div class='facebook'>
						<i class='fab fa-facebook-f'>
							<span>Facebook</span>
						</i>
					</div>
					<div class='instagram'>
						<i class='fab fa-instagram'>
							<span>Instagram</span>
						</i>
					</div>
				</div>
				<div class='signup'>
					Already have an account?
					<a
						href='#'
						onClick={() => {
							navigate('/auth/signin');
						}}>
						Sign in
					</a>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
