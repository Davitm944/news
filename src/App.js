
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './Auth/Auth';
import Header from './Components/Header';
import Home from './Components/Home';
import Main from './Components/Main';
import {
	AUTH_ROUTE,
	HOME_ROUTE,
	SIGN_IN_ROUTE,
	SIGN_UP_ROUTE
} from './Components/Routes';

function App() {
	return (
		<>
		<Routes>
			<Route path={HOME_ROUTE} element={<Home/>} />
			<Route path={AUTH_ROUTE} element={<Auth />} />
			<Route path={SIGN_IN_ROUTE} element={<Auth />} />
			<Route path={SIGN_UP_ROUTE} element={<Auth />} />
			<Route path='/*' element={<Home />} />
		</Routes>
		</>
	);
}

export default App;
