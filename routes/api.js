'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
	const translator = new Translator();

	app.route('/api/translate').post((req, res) => {
		const text = req.body.text;
		const locale = req.body.locale;
		const translated = translator.translate(text, locale);
		res.json({ text: text, translation: translated });
	});
};
