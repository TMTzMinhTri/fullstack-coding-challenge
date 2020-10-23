export default function (req, res, next) {
	res.success = function (data) {
		return res.status(200).json({ status: 200, code: 'OK', data });
	};
	next();
}
