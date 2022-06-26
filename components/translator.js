const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
	// return word array with replaced word
	replaceWord(arr, index, newWord) {
		return [
			...arr.slice(0, index),
			`<span class="highlight">${newWord}</span>`,
			...arr.slice(index + 1),
		];
	}

	replaceHonorifics(textString, locale) {
		let textArray = textString.split(' ');

		if (locale === 'american-to-british') {
			// find all keys in object
			for (const [key, value] of Object.entries(americanToBritishTitles)) {
				// check each word and compare with key
				for (let i = 0; i < textArray.length; i++) {
					if (key === textArray[i].toLowerCase()) {
						// create new honorific and replace
						const newHonorific = textArray[i].slice(0, -1);
						textArray = this.replaceWord(textArray, i, newHonorific);
					}
				}
			}
		}

		if (locale === 'british-to-american') {
			// find all values in object
			for (const [key, value] of Object.entries(americanToBritishTitles)) {
				//check each word and compare with value
				for (let i = 0; i < textArray.length; i++) {
					if (value === textArray[i].toLowerCase()) {
						// create new honorific and replace
						const newHonorific = `${textArray[i]}.`;
						textArray = this.replaceWord(textArray, i, newHonorific);
					}
				}
			}
		}

		return textArray.join(' ');
	}

	replaceAmericanTerms(textString, locale) {
		if (locale === 'american-to-british') {
			// find all keys in object
			for (const [key, value] of Object.entries(americanOnly)) {
				// if a key matches any terms, replace it
				const keyToCheck = `(?<![\\w-])${key}(?![\\w-])`;
				const keyRegex = new RegExp(keyToCheck);
				if (textString.search(keyRegex) !== -1) {
					textString = textString.replace(
						key,
						`<span class="highlight">${value}</span>`
					);
				}
			}
		}
		if (locale === 'british-to-american') {
			for (const [key, value] of Object.entries(americanOnly)) {
				// find all values in object
				const valueToCheck = `(?<![\\w-])${value}(?![\\w-])`;
				const valueRegex = new RegExp(valueToCheck);
				if (textString.search(valueRegex) !== -1) {
					// if a value matches any terms, replace it
					textString = textString.replace(
						value,
						`<span class="highlight">${key}</span>`
					);
				}
			}
		}

		return textString;
	}

	replaceBritishTerms(textString, locale) {
		if (locale === 'british-to-american') {
			// find all keys in object
			for (const [key, value] of Object.entries(britishOnly)) {
				// if a key matches any terms, replace it
				const keyToCheck = `(?<![\\w-])${key}(?![\\w-])`;
				const keyRegex = new RegExp(keyToCheck);
				if (textString.search(keyRegex) !== -1) {
					textString = textString.replace(
						key,
						`<span class="highlight">${value}</span>`
					);
				}
			}
		}
		if (locale === 'american-to-british') {
			for (const [key, value] of Object.entries(britishOnly)) {
				// find all values in object
				const valueToCheck = `(?<![\\w-])${value}(?![\\w-])`;
				const valueRegex = new RegExp(valueToCheck);
				if (textString.search(valueRegex) !== -1) {
					// if a value matches any terms, replace it
					textString = textString.replace(
						value,
						`<span class="highlight">${key}</span>`
					);
				}
			}
		}

		return textString;
	}

	replaceSpelling(textString, locale) {
		if (locale === 'american-to-british') {
			// find all keys in object
			for (const [key, value] of Object.entries(americanToBritishSpelling)) {
				// if a key matches any terms, replace it
				const keyToCheck = `(?<![\\w-])${key}(?![\\w-])`;
				const keyRegex = new RegExp(keyToCheck);
				if (textString.search(keyRegex) !== -1) {
					textString = textString.replace(
						key,
						`<span class="highlight">${value}</span>`
					);
				}
			}
		}
		if (locale === 'british-to-american') {
			for (const [key, value] of Object.entries(americanToBritishSpelling)) {
				// find all values in object
				const valueToCheck = `(?<![\\w-])${value}(?![\\w-])`;
				const valueRegex = new RegExp(valueToCheck);
				if (textString.search(valueRegex) !== -1) {
					// if a value matches any terms, replace it
					textString = textString.replace(
						value,
						`<span class="highlight">${key}</span>`
					);
				}
			}
		}

		return textString;
	}

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

		// replace words based on categories
		newMessage = this.replaceHonorifics(newMessage, locale);
		newMessage = newMessage.charAt(0).toLowerCase() + newMessage.slice(1);
		newMessage = this.replaceBritishTerms(newMessage, locale);
		newMessage = this.replaceAmericanTerms(newMessage, locale);
		newMessage = this.replaceSpelling(newMessage, locale);

		// check if string contains time
		if (newMessage.match(/\d{1,2}:?.?\d{2}/)) {
			newMessage = this.timeRegex(newMessage, locale);
		}

		if (newMessage.charAt(0) !== '<') {
			newMessage = newMessage.charAt(0).toUpperCase() + newMessage.slice(1);
		}

		// if there is no change, send a default
		if (textString === newMessage) {
			return 'Everything looks good to me!';
		}
		return newMessage;
	}
}

module.exports = Translator;
