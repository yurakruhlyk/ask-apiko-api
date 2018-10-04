const { sendUpdated } = require('../../middleware');

const update = ({ Question }) => async (req, res, next) => {
	try {
		const { _id } = req.params;
		const question = await Question.findOne({ _id });
		Object.assign(question, req.body);
    
		await question.save();
		return sendUpdated(res, { question });
	} catch (err) {
		next(err);
	}
};

module.exports = { update };