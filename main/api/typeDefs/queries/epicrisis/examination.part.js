const EpicrisisExamination = `
	ophthalmologist: String
	entDoctor: String
	urological: String
	physiotherapist: String
	psychiatric: String
	surgeon: String
	oncologist: String
	midwife: String
	other: String
`

module.exports = typeName => `
	type ${typeName}Examination {
		${EpicrisisExamination}
	}

	input ${typeName}ExaminationInput {
		${EpicrisisExamination}
	}
`
