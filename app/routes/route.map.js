import fp from 'lodash/fp'
import { createPrefix } from 'utils/create.prefix'

export const auth = createPrefix('/auth', {
	signin: fp.constant('/signin'),
})

export const board = createPrefix('/board', {
	index: fp.constant(''),
	welcome: fp.constant('/welcome'),
})

export const patients = createPrefix(`${board.index()}/patients`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: patientId => `/${patientId}/edit`,
})

export const dictionary = createPrefix(`${board.index()}/dictionary`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: patientId => `/${patientId}/edit`,
})
