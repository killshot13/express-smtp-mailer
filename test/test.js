const supertest = require('supertest')

var server = supertest.agent('http://localhost:5000')

describe('app', () => {
	it('should return contents of regex.txt file', done => {
		server
			.get('/test/regex.txt')
			.expect('Content-type', /text/)
			.expect(200)
			.end(function (err, res) {
				done()
			})
	})
})
