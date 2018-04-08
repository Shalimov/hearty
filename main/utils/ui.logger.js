const { transports, createLogger } = require('winston')

require('winston-daily-rotate-file')

const logger = createLogger({
	transports: [
		new transports.DailyRotateFile({
			filename: 'logs/ui-hearty-%DATE%.log',
			datePattern: 'YYYY-MM-DD-HH',
			zippedArchive: true,
			maxSize: '10m',
			maxFiles: '7d',
		}),
	],
})

module.exports = logger
