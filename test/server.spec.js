const request = require('supertest');
const { expect } = require('chai');
const server = require('../server');
const statusCodes = require('../data/status-codes.json');

describe('Node status codes API', () => {

	it('has a GET /code/:code route to provide information about a given status code', () => {
		return request(server)
			.get('/code/200')
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				const code200 = statusCodes.find(status => status.code === "200");
				expect(res.body).to.eql(code200);
			});
	});

	xit('has a GET /code route to provide all the status code data', () => {
		return request(server)
			.get('/')
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				expect(res.body).to.eql(statusCodes);
			});
	});

	xit('will 404 if there is no such code in the data', () => {
		return request(server)
			.get('/code/600')
			.expect(404);
	});

});
