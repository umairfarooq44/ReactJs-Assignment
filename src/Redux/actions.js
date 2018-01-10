import axios from 'axios';

export function fetchData(id) {
	return { type: 'FETCH_DATA', 
		payload: axios.get(`https://api.github.com/users?since=${id}`)
	};
}