const EpicrisisAnalysis = `
	name: String!
	description: String!
`

module.exports = typeName => `
	type ${typeName}Analysis {
		${EpicrisisAnalysis}
	}

	input ${typeName}AnalysisInput {
		${EpicrisisAnalysis}
	}
`
