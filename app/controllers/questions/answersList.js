const { sendList } = require('../../middleware');

const answersList = ({ Answer }) => async (req, res, next) => {
	try {
		let { limit, skip, sort } = req.query;
		skip = skip ? parseInt(skip, 10) : 0;
		limit = limit ? parseInt(limit, 10) : 100;

		const { _id } = req.params;
		const query = { questionId: _id };
		const sortQuery = sort || { createdAt: 1 };

		const count = await Answer.find(query).countDocuments();
		const answers = await Answer.find(query)
			.skip(skip)
			.limit(limit)
			.sort(sortQuery);

		return sendList(res, { answers, count });
	} catch (error) {
		next(error);
	}
};

module.exports = { answersList };