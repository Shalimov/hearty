const { createPaginationTypes } = require('../../create.pagination.types')

const xrayPart = require('./xray.part')
const usdScopiaPart = require('./usd.scopia.part')
const ecgEchoPart = require('./ecg.echo.part')
const diagnosisPart = require('./diagnosis.part')
const patientPart = require('./patient.part')

const typeName = 'Epicrisis'

const EpicrisisType = (input = '') => `
	epicrisisNo: Int!
	patient: ${typeName}Patient${input}!
	diagnosis: ${typeName}Diagnosis${input}!
	ecgEcho: ${typeName}ECGEcho${input}!
	usdScopia: ${typeName}USDScopia${input}!
	xray: ${typeName}XRay${input}!
`

const Epicrisis = `
	# Patient
	${patientPart(typeName)}
	# Diagnosis
	${diagnosisPart(typeName)}
	# Ecg Echo
	${ecgEchoPart(typeName)}
	# USD Scopia
	${usdScopiaPart(typeName)}
	# X-Ray
	${xrayPart(typeName)}

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
