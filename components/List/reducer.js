const initialState = {
	someArray: [ "test 1", "test 2" ]
};

function listReducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD_ITEM': 
			return Object.assign({}, state, {
				someArray: [
					...state.someArray,
					action.payload
				]
			});
		default:
			return state;
	}
};

export default listReducer;