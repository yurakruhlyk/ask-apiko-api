const { sendList } = require('../../middleware');

const list = ({ Question }) => async (req, res, next) => {
	try {
		let { limit, skip, search, sort } = req.query;
		skip = skip ? parseInt(skip, 10) : 0;
		limit = limit ? parseInt(limit, 10) : 100;
		
		const query = {};
		const sortQuery = sort || { createdAt: 1 };
    
		if (search) query.title = new RegExp(search, 'i');

		const count = await Question.find(query).countDocuments();
		const questions = await Question.find(query)
			.skip(skip)
			.limit(limit)
			.sort(sortQuery);
  
		return sendList(res, { questions, count });
	} catch (err) {
		next(err);
	}
};

module.exports = { list };