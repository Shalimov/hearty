const moment = require('moment')

const transformEpicrisis = (epicrisisData) => {
	const { patient } = epicrisisData
	
	patient.arrivalAtStr = moment(patient.arrivalAt).format('DD.MM.YYYY')
	patient.departureAtStr = moment(patient.departureAt).format('DD.MM.YYYY')
	patient.birthdateStr = moment(patient.birthdate).format('YYYY')

	return epicrisisData
}

module.exports = transformEpicrisis
