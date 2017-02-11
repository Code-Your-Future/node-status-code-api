const request = require('supertest');
const { expect } = require('chai');
const server = require('../server');
const statusCodes = require('../data/status-codes.json');

describe('Status codes API', () => {

	describe('GET `/code/:code`', () => {
		it.only('should take a status code as a URL parameter and return JSON data for that status code', () => {
			return request(server)
				.get('/code/200')
				.expect(200)
				.expect('Content-type', /json/)
				.expect(res => {
					const code200 = statusCodes.find(status => status.code === "200");
					expect(res.body).to.eql(code200);
				});
		});

		it('should respond with \'404 Not Found\' if there is no such code in the data', () => {
			return request(server)
				.get('/code/600')
				.expect(404);
		});
	});

	describe('GET `/code`', () => {
		it('should have a GET `/code` route to provide all the status code data', () => {
			return request(server)
				.get('/')
				.expect(200)
				.expect('Content-type', /json/)
				.expect(res => {
					expect(res.body).to.eql(statusCodes);
				});
		});
	});

});
