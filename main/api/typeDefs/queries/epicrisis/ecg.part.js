const EpicrisisECG = `
	arrival: String
	dynamic: String
	ks: String
	other: String
`

module.exports = typeName => `
	type ${typeName}ECG {
		${EpicrisisECG}
	}

	input ${typeName}ECGInput {
		${EpicrisisECG}
	}
`
