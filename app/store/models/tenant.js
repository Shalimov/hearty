import { types, flow, getSnapshot } from 'mobx-state-tree'
import services from 'services'

const { tenantService } = services

const nullableStringType = types.maybe(types.string)

const APIKeyModelScheme = {
	id: types.string,
	name: types.string,
	enabled: types.boolean,
	customerId: nullableStringType,
	description: nullableStringType,
	createdDate: types.Date,
	lastUpdatedDate: types.Date,
	stageKeys: types.array(nullableStringType),
	value: types.string,
}

const TenantContactModelSceheme = {
	firstName: nullableStringType,
	lastName: nullableStringType,
	email: nullableStringType,
}

const TenantModelScheme = {
	id: types.identifier(),
	name: types.string,
	creationDate: types.Date,
	address1: nullableStringType,
	address2: nullableStringType,
	address3: nullableStringType,
	zip: nullableStringType,
	country: nullableStringType,
	billingContact: types.maybe(types.model(TenantContactModelSceheme)),
	technicalContact: types.maybe(types.model(TenantContactModelSceheme)),
	minPasswordLength: types.number,
	canUserSignup: types.boolean,
	mfaEnabled: types.boolean,
	apiKeys: types.array(types.maybe(types.model(APIKeyModelScheme))),
	autoVerifiedAttributes: types.array(types.string),
	passwordPolicy: types.array(nullableStringType),
	premiumFeatures: types.array(nullableStringType),
}

const TenantModel = types.model('TenantModel', TenantModelScheme).actions(self => ({
	applyChanges(changes) {
		Object.assign(self, changes)
	},

	save: flow(function* () {
		const tenantSnapshot = getSnapshot(self)
		yield tenantService.update(tenantSnapshot.id, tenantSnapshot)
		return self
	}),
}))

export default TenantModel

