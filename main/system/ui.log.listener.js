const { ipcMain } = require('electron')
const uiLogger = require('../utils/ui.logger')
const logger = require('../utils/logger')

module.exports = {
	init() {
		ipcMain.on('ui-log-event', (event, info) => {
			try {
				uiLogger[info.level](info.args)
			} catch (err) {
				logger.error(err)
			}
		})
	},
}
