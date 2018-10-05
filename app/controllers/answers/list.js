const { sendList } = require('../../middleware');

const list = ({ Answer }) => async (req, res, next) => {
	try {
		let { limit, skip, search } = req.query;
		skip = skip ? parseInt(skip, 10) : 0;
		limit = limit ? parseInt(limit, 10) : 100;

		const query = {};
    
		if (search) query.title = new RegExp(search, 'i');
    
		const count = await Answer.find(query).countDocuments();
		const answers = await Answer.find(query)
			.skip(skip)
			.limit(limit);

		return sendList(res, { answers, count });
	} catch (error) {
		next(error);
	}
};

module.exports = { list };