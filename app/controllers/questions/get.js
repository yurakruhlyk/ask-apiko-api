const { sendOne } = require('../../middleware');

const get = ({ Question }) => async (req, res, next) => {
	try {
		const { _id } = req.params;
		
		const question = await Question.findOne({ _id });
		return sendOne(res, { question });
	} catch (err) {
		next(err);
	}
};

module.exports = { get };