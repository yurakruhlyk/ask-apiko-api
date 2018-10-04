const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
	description: {
		type: String,
		required: true
	},
	questionId: {
		type: ObjectId,
		required: true
	},
	createdAt: {
		type: Date,
		default: new Date(),
		required: true
	},
	createBy: {
		type: ObjectId,
		required: true
	}
});

module.exports = { schema };