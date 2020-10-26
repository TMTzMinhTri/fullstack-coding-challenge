export const requireQueryParams = (param) => {
	return (req, res, next) => {
		if (!req.query[param]) {
			return res.error('param_error', `${param} can't be blank`);
		}
		next();
	};
};

export const requireUrlParam = (param) => {
	return (req, res, next) => {
		if (!req.params[param]) {
			return res.error('param_error', `${param} can't be blank`);
		}
		next();
	};
};

export const requireBodyParam = (param) => {
	return (req, res, next) => {
		if (!req.body[param]) {
			return res.error('param_error', `${param} can't be blank`);
		}
		next();
	};
};
