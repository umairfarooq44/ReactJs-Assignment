import {
	FETCH_DATA_FULFILLED,
	FETCH_DATA_PENDING,
	FETCH_DATA_REJECTED
} from './constants';


const initialState = { data: [], isFetching: false, error: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_PENDING:{
			return {
				...state,
				isFetching: true
			}
		}
		case FETCH_DATA_FULFILLED:{
			return {
				...state,
				isFetching: false,
				data: state.data.concat(action.payload.data)
			}
		}
		case FETCH_DATA_REJECTED:{
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