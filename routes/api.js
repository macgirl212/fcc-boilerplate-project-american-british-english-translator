'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
	const translator = new Translator();

	app.route('/api/translate').post((req, res) => {
		const text = req.body.text;
		const locale = req.body.locale;

		// error messages
		if (!text) {
			return res.json({ error: 'No text to translate' });
		}

		if (locale !== 'american-to-british' || locale !== 'british-to-american') {
			return res.json({ error: 'Invalid value for locale field' });
		}

		const translated = translator.translate(text, locale);
		res.json({ text: text, translation: translated });
	});
};
