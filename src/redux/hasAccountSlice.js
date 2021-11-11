export function hasAccounthReducer(state = {}, action) {
	if (action.type === 'edit-has-account') {
		return {
			value : action.payload.value
		};
	}
	return state;
}

export const initialHasAccount = {
	value : false
};

export function selectHasAccount(state) {
	return state.hasAccount.value;
}

export function editHasAccount(newState) {
	return {
		type    : 'edit-has-account',
		payload : {
			value : newState
		}
	};
}
