import fp from 'lodash/fp'
import { createPrefix } from 'utils/create.prefix'

export const auth = createPrefix('/auth', {
	signin: fp.constant('/signin'),
})

export const board = createPrefix('/board', {
	index: fp.constant(''),
	welcome: fp.constant('/welcome'),
})

export const settings = createPrefix(`${board.index()}/settings`, {
	shortcuts: fp.constant('/shortcuts'),
})

export const medicine = createPrefix(`${board.index()}/medicine/groups`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: groupId => `/${groupId}/edit`,
})

export const analysis = createPrefix(`${board.index()}/analysis`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: analysisId => `/${analysisId}/edit`,
})

export const dictionary = createPrefix(`${board.index()}/dictionary`, {
	index: fp.constant(''),
})

export const epicrisis = createPrefix(`${board.index()}/epicrisis`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: epicrisisId => `/${epicrisisId}/edit`,
})
