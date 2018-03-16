const EpicrisisDiagnosis = `
	main: String
	complication: String
	followingPart: String
`

module.exports = typeName => `
	type ${typeName}Diagnosis {
		${EpicrisisDiagnosis}
	}

	input ${typeName}DiagnosisInput {
		${EpicrisisDiagnosis}
	}
`
