const { createPaginationTypes } = require('../create.pagination.types')

const typeName = 'Epicrisis'

const EpicrisisType = (input = '') => `
	epicrisisNo: Int!
	patient: ${typeName}Patient${input}!
	diagnosis: ${typeName}Diagnosis${input}!
`

const EpicrisisPatient = `
	fullname: String!
	birthdate: Date!
	region: Int!
	address: String!
	jobInfo: String!
	arrivalAt: Date!
	departureAt: Date
`

const EpicrisisDiagnosis = `
	main: String!
	complication: String
	followingPart: String
`

const Epicrisis = `
	# Patient
	type ${typeName}Patient {
		${EpicrisisPatient}
	}

	input ${typeName}PatientInput {
		${EpicrisisPatient}
	}

	# Diagnosis
	type ${typeName}Diagnosis {
		${EpicrisisDiagnosis}
	}

	input ${typeName}DiagnosisInput {
		${EpicrisisDiagnosis}
	}

	# Epicrisis
	type ${typeName} {
		_id: ID!
		${EpicrisisType()}
	}

	input EpicrisisInput {
		_id: ID
		${EpicrisisType('Input')}
	}

	${createPaginationTypes(typeName)}
`

module.exports = Epicrisis
