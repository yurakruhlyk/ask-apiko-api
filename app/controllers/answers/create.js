const { sendCreated } = require('../../middleware');

const create = ({ Answer }) => async (req, res, next) => {
	try {
		const answer = new Answer();
		Object.assign(answer, req.body);

		await answer.save();
		return sendCreated(res, { answer });
	} catch (error) {
		next(error);
	}
};

module.exports = { create };