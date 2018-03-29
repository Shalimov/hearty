import fp from 'lodash/fp'

const emptyEpicrisis = {
	diagnosis: {
		main: null,
		complication: null,
		followingPart: null,
	},
	ecgEcho: {
		arrival: null,
		dynamic: null,
		ks: null,
		other: null,
	},
	usdScopia: {
		obp: null,
		bca: null,
		fgds: null,
		bronchoscopy: null,
		other: null,
	},
	xray: {
		crgogk: null,
		crgSkull: null,
		jointsRoentgenography: null,
		other: null,
	},
	ct: {
		head: null,
		ogk: null,
		obp: null,
		other: null,
	},
	examination: {
		ophthalmologist: null,
		entDoctor: null,
		urological: null,
		physiotherapist: null,
		psychiatric: null,
		surgeon: null,
		oncologist: null,
		midwife: null,
		other: null,
	},
	medicineRecommendations: [],
	treatment: [],
	analyses: [],
	recommended: null,
	summary: null,
}

export const getEmptyEpicrisis = () => fp.clone(emptyEpicrisis)
