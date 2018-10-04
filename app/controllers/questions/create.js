const { sendCreated } = require('../../middleware');

const create = ({ Question }) => async (req, res, next) => {
	try {
		const question = new Question();
		Object.assign(question, req.body);
    
		await question.save();
		return sendCreated(res, { question });
	} catch (error) {
		next(error);
	}
};

module.exports = { create };