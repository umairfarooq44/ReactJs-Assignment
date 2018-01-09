export default (state = {data:[]}, action) => {
	switch (action.type) {
		case 'UPDATE_DATA': {
			const {data } = action;
			return {data:[
				...data,
				...state
			]};
		}
		default:
			return state;
	}
};