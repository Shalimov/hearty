import fp from 'lodash/fp'
import { createPrefix } from 'utils/create.prefix'

export const auth = createPrefix('/auth', {
	signin: fp.constant('/signin'),
})

export const board = createPrefix('/board', {
	index: fp.constant(''),
	welcome: fp.constant('/welcome'),
})

export const medicine = createPrefix(`${board.index()}/medicine`, {
	index: fp.constant(''),
})

export const dictionary = createPrefix(`${board.index()}/dictionary`, {
	index: fp.constant(''),
})

export const epicrisis = createPrefix(`${board.index()}/epicrisis`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
})
