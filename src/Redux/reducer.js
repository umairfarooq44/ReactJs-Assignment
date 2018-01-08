export default (state = {id:0}, action) => {
	switch (action.type) {
		case 'UPDATE_ID': {
			const {id } = action;
			return {
				id
			};
		}
		default:
			return state;
	}
};