const EpicrisisUSDScopia = `
	obp: String
	bca: String
	fgds: String
	bronchoscopy: String
	other: String
`

module.exports = typeName => `
	type ${typeName}USDScopia {
		${EpicrisisUSDScopia}
	}

	input ${typeName}USDScopiaInput {
		${EpicrisisUSDScopia}
	}
`
