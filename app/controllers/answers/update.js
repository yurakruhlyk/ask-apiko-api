const { sendUpdated } = require('../../middleware');

const update = ({ Answer }) => async (req, res, next) => {
	try {
		const { _id } = req.params;
		const answer = await Answer.findOne({ _id });
		Object.assign(answer, req.body);
    
		await answer.save();
		return sendUpdated(res, { answer });
	} catch (error) {
		next(error);
	}
};

module.exports = { update };