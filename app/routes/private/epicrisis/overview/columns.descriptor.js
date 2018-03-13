import fp from 'lodash/fp'
import t from 'i18n'

export default (Controls) => [
	{
		Header: t('labels.epicrisisNo'),
		accessor: 'epicrisisNo',
	},
	{
		Header: t('labels.fullname'),
		accessor: 'patient.fullname',
	},
	{
		Header: t('labels.arrivalAt'),
		accessor: 'patient.arrivalAt',
	},
	{
		Header: t('labels.arrivalAt'),
		accessor: 'patient.departureAt',
	},
	{
		id: 'edit',
		width: 80,
		accessor: fp.identity,
		Cell: Controls,
	},
]
