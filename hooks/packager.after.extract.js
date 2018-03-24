module.exports = [
	// TODO: update after checking
	(buildPath, elVers, platform, arch, callback) => {
		// eslint-disable-next-line
		console.log('After Extract Callback: ', buildPath)
		callback()
	},
]
