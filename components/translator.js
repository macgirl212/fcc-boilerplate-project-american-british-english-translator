const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
	timeRegex(textString, locale) {
		let newSymbol;

		// check the locale to update time symbol
		if (locale === 'american-to-british') {
			newSymbol = '.';
		}
		if (locale === 'british-to-american') {
			newSymbol = ':';
		}

		// replace old time symbol
		const timeRegex = /(\d{1,2})(:?.?)(\d{2})/g;
		const newTime = textString.replace(timeRegex, `$1${newSymbol}$3`);

		// wrap new time in span
		const spanRegex = newTime.match(/(\d{1,2}:?.?\d{2})/g);
		const newString = newTime.replace(
			spanRegex,
			`<span class="highlight">${spanRegex}</span>`
		);
		return newString;
	}

	translate(textString, locale) {
		let newMessage = textString;

		// check if string contains time
		if (textString.match(/\d{1,2}:?.?\d{2}/)) {
			newMessage = this.timeRegex(newMessage, locale);
		}
		return newMessage;
	}
}

module.exports = Translator;
