const ERRORS = Object.freeze({
	param_error: { type: 'param_error', status: 400 },
	invalid_auth: { type: 'invalid_auth', status: 401 },
	endpoint_error: { type: 'endpoint_error', status: 404 },
	record_not_found: { type: 'record_not_found', status: 404 },
	internal_errors: { type: 'internal_errors', status: 500 },
});

export default function (req, res, next) {
	res.error = function (type, message) {
		const error = ERRORS[type];
		return res.status(error.status).json({
			status: error.status,
			code: error.type,
			message: message ? message : 'internal_errors',
		});
	};
	next();
}
