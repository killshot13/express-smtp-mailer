// @ts-nocheck
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const supertest = require('supertest')

const server = supertest.agent('http://localhost:5000')

describe('app', () => {
	it('should return contents of regex.txt file', (done) => {
		server
			.get('/test/regex.txt')
			.expect('Content-type', /text/)
			.expect(200)
			.end((err, res) => {
				done()
			})
	})
})
