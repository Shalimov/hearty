const { createPaginationTypes } = require('../../create.pagination.types')

const treatmentPart = require('./treatment.part')
const medicineRecommendationPart = require('./medicine.recommendations.part')
const examinationPart = require('./examination.part')
const analysisPart = require('./analisis.part')
const ctPart = require('./ct.part')
const xrayPart = require('./xray.part')
const usdScopiaPart = require('./usd.scopia.part')
const ecgEchoPart = require('./ecg.echo.part')
const diagnosisPart = require('./diagnosis.part')
const patientPart = require('./patient.part')

const typeName = 'Epicrisis'

// TODO: Check it epicrisi no type
const EpicrisisType = (input = '') => `
	epicrisisNo: String!

	# complex fields
	patient: ${typeName}Patient${input}!
	diagnosis: ${typeName}Diagnosis${input}!
	ecgEcho: ${typeName}ECGEcho${input}!
	usdScopia: ${typeName}USDScopia${input}!
	xray: ${typeName}XRay${input}!
	ct: ${typeName}CT${input}!
	examination: ${typeName}Examination${input}!
	medicineRecommendations: [${typeName}MedicineRecommendation${input}!]
	treatment: [${typeName}Treatment${input}!]
	analyses: [${typeName}Analysis${input}!]

	# simple fields
	recommended: String!
	summary: String!
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
	# CT
	${ctPart(typeName)}
	# Examination
	${examinationPart(typeName)}
	# Medicine Recommendation
	${medicineRecommendationPart(typeName)}
	# Treatment
	${treatmentPart(typeName)}
	# Analysis
	${analysisPart(typeName)}

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
