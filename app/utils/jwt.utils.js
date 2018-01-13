import fp from 'lodash/fp'

const tryJSONParse = (data) => {
	let parsedResult

	try {
		parsedResult = JSON.parse(data)
	} catch (_err) {
		parsedResult = null
	}

	return parsedResult
}

export const toB64 = data => btoa(data)

export const fromB64 = data => atob(data)

export const extractJWTPayload = fp.flow(
	fp.split('.'),
	([, data]) => fromB64(data),
	tryJSONParse
)

export const isJWTExpired = fp.flow(
	extractJWTPayload,
	({ exp }) => exp < Date.now()
)
