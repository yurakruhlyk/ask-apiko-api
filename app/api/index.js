const express = require('express');

const { errorHandler } = require('../middleware');

// list of models here
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');

// list of controllers here
const questions = require('../controllers/questions');
const answers = require('../controllers/answers');

// combine models into one object
const models = { Question, Answer };

const routersInit = config => {
	const router = express();

	// register api points
	router.use('/questions', questions(models, { config }));
	router.use('/answers', answers(models, { config }));

	// catch api all errors
	router.use(errorHandler);
	return router;
};

module.exports = routersInit;