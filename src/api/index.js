export const Api = {
	httpRequest(method, url, body) {
		return new Promise((resolve) => {
			fetch(url, {
				method,
				body: body ? JSON.stringify(body) : null,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((rsp) => resolve(rsp));
		});
	},
	get(url) {
		return this.httpRequest('GET', url);
	},
	post(url, body) {
		return this.httpRequest('POST', url, body);
	},
	patch(url, body) {
		return this.httpRequest('PATCH', url, body);
	},
	delete(url) {
		return this.httpRequest('DELETE', url);
	},
};
