import axios from 'axios';
import {LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS}  from './constants'

const loadUsers =()  => ({type: LOAD_USERS});
const loadUserSuccess = users => ({type: LOAD_USERS_SUCCESS, users});
const loadUsersError = () => ({type: LOAD_USERS_ERROR})



export const  fetchData = id => dispatch => {
	dispatch(loadUsers());
	axios.get(`https://api.github.com/users?since=${id}`)
	.then(res => {
		const {data} = res;
		dispatch(loadUserSuccess(data))
	})
	.catch(() => dispatch(loadUsersError()));

}