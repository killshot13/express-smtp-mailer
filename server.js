// @ts-nocheck
/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const rateLimit = require('express-rate-limit')
const path = require('path')
const bodyParser = require('body-parser')

const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
	console.error(`Node cluster master ${process.pid} is running`)

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork()
	}

	cluster.on('exit', (worker, code, signal) => {
		console.error(
			`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`,
		)
	})
} else {
	const app = express()

	// apply rate limiter to all requests
	const apiLimiter = rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minute
		max: 100, // limit to 100 requests per windowMs
	})
	app.use(apiLimiter)

	// Set app to use proper methods to parse our data
	// parse application/json
	app.use(bodyParser.json())
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }))

	// Priority serve any static files.
	// Replace the example to connect to your frontend.
	// Priority serve any static files.
	app.use('/', express.static(path.resolve(__dirname, './frontend/build')))

	// Answer API requests.
	const mailrouter = require('./routes/mailrouter')
	app.use('/routes', mailrouter)

	// All remaining requests return the frontend app, so it can handle routing.
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'))
	})
	app.listen(PORT, () => {
		console.log(
			`Node ${
				isDev ? 'dev server' : `cluster worker ${process.pid}`
			}: listening on port ${PORT}`,
		)
	})

	process.on('SIGTERM', () => {
		server.close(() => {
			console.log('Process terminated')
		})
	})
}
