const EpicrisisXRay = `
	crgogk: String
	crgSkull: String
	jointsRoentgenography: String
	other: String
`

module.exports = typeName => `
	type ${typeName}XRay {
		${EpicrisisXRay}
	}

	input ${typeName}XRayInput {
		${EpicrisisXRay}
	}
`
