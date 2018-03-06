const EpicrisisECGEcho = `
	arrival: String
	dynamic: String
	ks: String
	other: String
`

module.exports = typeName => `
	type ${typeName}ECGEcho {
		${EpicrisisECGEcho}
	}

	input ${typeName}ECGEchoInput {
		${EpicrisisECGEcho}
	}
`
