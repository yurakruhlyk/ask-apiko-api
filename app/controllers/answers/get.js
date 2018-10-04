const { sendOne } = require('../../middleware');

const get = ({ Answer }) => async (req, res, next) => {
	try {
		const { _id } = req.params;
    
		const answer = await Answer.findOne({ _id });
		return sendOne(res, { answer });
	} catch (error) {
		next(error);
	}
};

module.exports = { get };