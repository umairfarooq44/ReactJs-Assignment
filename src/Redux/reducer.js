import { log } from "util";

export default (state = {data:[]}, action) => {
	switch (action.type) {
		case 'FETCH_DATA_PENDING':{
			return {
				...state,
				isFetching: true
			}
		}
		case 'FETCH_DATA_FULFILLED':{
			return {
				...state,
				isFetching: false,
				// data: action.payload
				data: state.data.concat(action.payload)
			}
		}
		case 'FETCH_DATA_REJECTED':{
			return {
				...state,
				isFetching: false,
				error: true
			}
		}
		default:
			return state;
	}
};