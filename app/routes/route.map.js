import fp from 'lodash/fp'
import { createPrefix } from 'utils/create.prefix'

export const auth = createPrefix('/auth', {
	signin: fp.constant('/signin'),
	signup: fp.constant('/signup'),
	resetPassword: fp.constant('/reset-password'),
	changePassword: fp.constant('/change-password'),
})

export const board = createPrefix('/board', {
	index: fp.constant(''),
	welcome: fp.constant('/welcome'),
	playground: fp.constant('/playground'),
	specification: fp.constant('/specification'),
})

export const tenants = createPrefix(`${board.index()}/tenants`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: id => `/${id}/edit`,
	keys: id => `/${id}/keys`,
	settings: id => `/${id}/settings`,
})

export const tenantUsers = createPrefix(tenantId => `${tenants.index()}/${tenantId}/users`, {
	index: fp.constant(''),
	add: fp.constant('/add'),
	edit: id => `/${id}/edit`,
	delete: id => `/${id}/delete`,
})
