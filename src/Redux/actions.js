export function fetchData(data) {
	return { type: 'FETCH_DATA', 
		payload:new Promise((resolve, reject) => {
			setTimeout(() => fetch('https://api.github.com/users?since=70').then(response => {
				console.log('hahaha')
				resolve(response.json());
			}).catch(err => reject(err)), 0);
		})
	};
}