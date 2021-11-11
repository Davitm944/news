import { createStore, combineReducers } from 'redux';
import { initialHasAccount, hasAccounthReducer } from './hasAccountSlice';
import { initialTerm, termReducer } from './termSlice';

const store = createStore(
	combineReducers({
		hasAccount : hasAccounthReducer,
		term       : termReducer
	}),
	{
		hasAccount : initialHasAccount,
		term       : initialTerm
	}
);

export default store;
