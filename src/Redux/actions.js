export function fetchData(id) {
	return { type: 'FETCH_DATA', 
		payload:new Promise((resolve, reject) => {
			setTimeout(() => fetch(`https://api.github.com/users?since=${id}`).then(response => {
				console.log('hahaha')
				resolve(response.json());
			}).catch(err => reject(err)), 0);
		})
	};
}