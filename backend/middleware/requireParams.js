import _ from 'lodash';

export const requireQueryParams = (params) => {
	return (req, res, next) => {
		let errors = [];
		for (const param of params) {
			if (_.isUndefined(req.query[param])) {
				errors.push(param);
			}
		}
		if (!_.isEmpty(errors)) {
			return res.error('param_error', `${errors.join(', ')} can't be blank`);
		}
		next();
	};
};

export const requireUrlParam = (params) => {
	return (req, res, next) => {
		let errors = [];
		for (const param of params) {
			if (_.isUndefined(req.params[param])) {
				errors.push(param);
			}
		}
		if (!_.isEmpty(errors)) {
			return res.error('param_error', `${errors.join(', ')} can't be blank`);
		}
		next();
	};
};

export const requireBodyParam = (params) => {
	return (req, res, next) => {
		let errors = [];
		for (const param of params) {
			if (_.isUndefined(req.body[param])) {
				errors.push(param);
			}
			if (!_.isEmpty(errors)) {
				return res.error('param_error', `${errors.join(', ')} can't be blank`);
			}
			next();
		}
	};
};
