const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translator = new Translator();

suite('Functional Tests', () => {
	test('POST /api/translate with text and locale fields', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				text: 'I have an appointment with Mr. Wing.',
				locale: 'american-to-british',
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(
					res.body.translation,
					'I have an appointment with <span class="highlight">Mr</span> Wing.'
				);
				done();
			});
	});
	test('POST /api/translate with text and invalid locale fields', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				text: 'Who is that guy over there?',
				locale: 'american-to-australian',
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.error, 'Invalid value for locale field');
				done();
			});
	});
	test('POST /api/translate with missing text field', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				locale: 'british-to-american',
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.error, 'Required field(s) missing');
				done();
			});
	});
	test('POST /api/translate with missing locale field', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				text: "She just got her learner's permit.",
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.error, 'Invalid value for locale field');
				done();
			});
	});
	test('POST /api/translate with empty text', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				text: '',
				locale: 'american-to-british',
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.error, 'No text to translate');
				done();
			});
	});
	test('POST /api/translate with text that needs no translation', (done) => {
		chai
			.request(server)
			.post('/api/translate')
			.send({
				text: 'Luke is the detective on the case.',
				locale: 'british-to-american',
			})
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.translation, 'Everything looks good to me!');
				done();
			});
	});
});
