const { transports, createLogger } = require('winston')

require('winston-daily-rotate-file')

const logger = createLogger({
	transports: [
		new transports.DailyRotateFile({
			filename: 'logs/hearty-%DATE%.log',
			datePattern: 'YYYY-MM-DD-HH',
			zippedArchive: true,
			maxSize: '20m',
			maxFiles: '14d',
		}),
	],
})

module.exports = logger
