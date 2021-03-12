'use strict';

const { init } = require('../src/server');

let server;

beforeEach(async () => {
	server = await init();
});

afterEach(async () => {
	await server.stop();
});

describe('POST /start', () => {

	const request = {
		method: 'POST',
		url: '/start'
	};

	it('responds with 204', async () => {
		const res = await server.inject(request);
		expect(res.statusCode).toBe(204);
	});

});

describe('POST /move', () => {

	const request = {
		method: 'POST',
		url: '/move'
	};

	it('responds with 204', async () => {
		const res = await server.inject(request);
		expect(res.statusCode).toBe(204);
	});

});

describe('GET /move', () => {

	const request = {
		method: 'GET',
		url: '/move'
	};

	it('responds with 200', async () => {
		const res = await server.inject(request);
		expect(res.statusCode).toBe(200);
	});

	it('responds with ROCK', async () => {
		const res = await server.inject(request);
		expect(res.payload).toBe('ROCK');
	});

});