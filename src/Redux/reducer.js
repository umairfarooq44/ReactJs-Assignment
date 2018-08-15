import {
	LOAD_USERS,
	LOAD_USERS_ERROR,
	LOAD_USERS_SUCCESS
} from './constants';


const initialState = { data: [], isFetching: false, error: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USERS:{
			return {
				...state,
				isFetching: true
			}
		}
		case LOAD_USERS_SUCCESS:{
			return {
				...state,
				isFetching: false,
				data: state.data.concat(action.users)
			}
		}
		case LOAD_USERS_ERROR:{
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