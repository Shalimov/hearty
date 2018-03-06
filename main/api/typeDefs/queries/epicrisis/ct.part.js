const EpicrisisCT = `
	head: String
	ogk: String
	obp: String
	other: String
`

module.exports = typeName => `
	type ${typeName}CT {
		${EpicrisisCT}
	}

	input ${typeName}CTInput {
		${EpicrisisCT}
	}
`
