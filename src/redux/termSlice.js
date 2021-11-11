export function termReducer(state = {}, action) {
	if (action.type === 'edit-term') {
		return {
			value : action.payload.value
		};
	}
	return state;
}

export const initialTerm = {
	value : 'latest'
};

export function selectTerm(state) {
	return state.term.value;
}

export function editTerm(newState) {
	return {
		type    : 'edit-term',
		payload : {
			value : newState
		}
	};
}
