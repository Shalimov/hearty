const EpicrisisMedicineRecommendation = `
	medicine: String!
	recommendation: String!
`

module.exports = typeName => `
	type ${typeName}MedicineRecommendation {
		${EpicrisisMedicineRecommendation}
	}

	input ${typeName}MedicineRecommendationInput {
		${EpicrisisMedicineRecommendation}
	}
`
