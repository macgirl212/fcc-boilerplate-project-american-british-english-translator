const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
	test('Translates "Mangoes are my favorite fruit." to British English', () => {
		const textString = 'Mangoes are my favorite fruit.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Mangoes are my <span class="highlight">favourite</span> fruit.'
		);
	});
	test('Translates "I ate yogurt for breakfast." to British English', () => {
		const textString = 'I ate yogurt for breakfast.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.'
		);
	});
	test('Translates "We had a party at my friend\'s condo." to British English', () => {
		const textString = "We had a party at my friend's condo.";
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'We had a party at my friend\'s <span class="highlight">flat</span>.'
		);
	});
	test('Translates "Can you toss this in the trashcan for me?" to British English', () => {
		const textString = 'Can you toss this in the trashcan for me?';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Can you toss this in the <span class="highlight">bin</span> for me?'
		);
	});
	test('Translates "The parking lot was full." to British English', () => {
		const textString = 'The parking lot was full.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'The <span class="highlight">car park</span> was full.'
		);
	});
	test('Translates "Like a high tech Rube Goldberg machine." to British English', () => {
		const textString = 'Like a high tech Rube Goldberg machine.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Everything looks good to me!'
		);
	});
	test('Translates "To play hooky means to skip class or work." to British English', () => {
		const textString = 'To play hooky means to skip class or work.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'To <span class="highlight">bunk off</span> means to skip class or work.'
		);
	});
	test('Translates "No Mr. Bond, I expect you to die." to British English', () => {
		const textString = 'No Mr. Bond, I expect you to die.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'No <span class="highlight">Mr</span> Bond, I expect you to die.'
		);
	});
	test('Translates "Dr. Grosh will see you now." to British English', () => {
		const textString = 'Dr. Grosh will see you now.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'<span class="highlight">Dr</span> Grosh will see you now.'
		);
	});
	test('Translates "Lunch is at 12:15 today." to British English', () => {
		const textString = 'Lunch is at 12:15 today.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Lunch is at <span class="highlight">12.15</span> today.'
		);
	});
	test('Translates "We watched the footie match for a while." to American English', () => {
		const textString = 'We watched the footie match for a while.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'We watched the <span class="highlight">soccer</span> match for a while.'
		);
	});
	test('Translates "Paracetamol takes up to an hour to work." to American English', () => {
		const textString = 'Paracetamol takes up to an hour to work.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'<span class="highlight">Tylenol</span> takes up to an hour to work.'
		);
	});
	test('Translates "First, caramelise the onions." to American English', () => {
		const textString = 'First, caramelise the onions.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'First, <span class="highlight">caramelize</span> the onions.'
		);
	});
	test('Translates "I spent the bank holiday at the funfair." to American English', () => {
		const textString = 'I spent the bank holiday at the funfair.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
		);
	});
	test('Translates "I had a bicky then went to the chippy." to American English', () => {
		const textString = 'I had a bicky then went to the chippy.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
		);
	});
	test('Translates "I\'ve just got bits and bobs in my bum bag." to American English', () => {
		const textString = "I've just got bits and bobs in my bum bag.";
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
		);
	});
	test('Translates "The car boot sale at Boxted Airfield was called off." to American English', () => {
		const textString = 'The car boot sale at Boxted Airfield was called off.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
		);
	});
	test('Translates "Have you met Mrs Kalyani?" to American English', () => {
		const textString = 'Have you met Mrs Kalyani?';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Have you met <span class="highlight">Mrs.</span> Kalyani?'
		);
	});
	test('Translates "Prof Joyner of King\'s College, London." to American English', () => {
		const textString = "Prof Joyner of King's College, London.";
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
		);
	});
	test('Translates "Tea time is usually around 4 or 4.30." to American English', () => {
		const textString = 'Tea time is usually around 4 or 4.30.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.deepEqual(
			translator.translate(textString, locale),
			'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
		);
	});
	test('Highlight translation in "Mangoes are my favorite fruit."', () => {
		const textString = 'Mangoes are my favorite fruit.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.include(
			translator.translate(textString, locale),
			'<span class="highlight">favourite</span>',
			'there should be a span tag with the class of highlight'
		);
	});
	test('Highlight translation in "I ate yogurt for breakfast."', () => {
		const textString = 'I ate yogurt for breakfast.';
		const locale = 'american-to-british';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.include(
			translator.translate(textString, locale),
			'<span class="highlight">yoghurt</span>',
			'there should be a span tag with the class of highlight'
		);
		assert.include(
			translator.translate(textString, locale),
			'<span class="highlight">brekkie</span>',
			'there should be a span tag with the class of highlight'
		);
	});
	test('Highlight translation in "We watched the footie match for a while."', () => {
		const textString = 'We watched the footie match for a while.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.include(
			translator.translate(textString, locale),
			'<span class="highlight">soccer</span>',
			'there should be a span tag with the class of highlight'
		);
	});
	test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
		const textString = 'Paracetamol takes up to an hour to work.';
		const locale = 'british-to-american';
		assert.isString(
			translator.translate(textString, locale),
			'string should be returned'
		);
		assert.include(
			translator.translate(textString, locale),
			'<span class="highlight">Tylenol</span>',
			'there should be a span tag with the class of highlight'
		);
	});
});
