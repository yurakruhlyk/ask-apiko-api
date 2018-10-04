const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
	createdBy: {
		type: ObjectId,
		required: true,
	}
});

module.exports = { schema };