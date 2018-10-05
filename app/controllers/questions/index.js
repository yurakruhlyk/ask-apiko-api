const { Router: router } = require('express');

const { get } = require('./get');
const { list } = require('./list');
const { create } = require('./create');
const { update } = require('./update');
const { remove } = require('./remove');
const { answersList } = require('./answersList');

module.exports = (models, { config }) => {
	const api = router();

	api.get('/', list(models, { config }));
	api.get('/:_id', get(models, { config }));
	api.post('/', create(models, { config }));
	api.patch('/:_id', update(models, { config }));
	api.delete('/:_id', remove(models, { config }));
	api.get('/:_id/answers', answersList(models, { config }));

	return api;
};