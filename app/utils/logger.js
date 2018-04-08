import fp from 'lodash/fp'

// eslint-disable-next-line
const { ipcRenderer } = nodeRequire('electron')

const defaultLogger = console

export default new Proxy({}, {
	get(target, propName) {
		return (...args) => {
			defaultLogger[propName](args)
			// TODO: move out to constants
			ipcRenderer.send('ui-log-event', {
				level: propName,
				args: fp.map(fp.pick(['message', 'stack']), args),
			})
		}
	},
})
