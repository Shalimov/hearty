const EpicrisisTreatment = `
	description: String!
`

module.exports = typeName => `
	type ${typeName}Treatment {
		${EpicrisisTreatment}
	}

	input ${typeName}TreatmentInput {
		${EpicrisisTreatment}
	}
`
