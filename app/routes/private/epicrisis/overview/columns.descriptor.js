import fp from 'lodash/fp'
import moment from 'moment'
import t from 'i18n'

export default (Controls) => [
	{
		Header: t('labels.epicrisisNo'),
		accessor: 'epicrisisNo',
		filterable: false,
	},
	{
		Header: t('labels.fullname'),
		accessor: 'patient.fullname',
		filterable: false,
	},
	{
		Header: t('labels.arrivalAt'),
		id: 'arrivalAt',
		accessor: fp.flow(
			fp.get('patient.arrivalAt'),
			arrivalAt => moment(arrivalAt).format('DD/MM/YYYY') 
		),
		filterable: false,
	},
	{
		Header: t('labels.departureAt'),
		id: 'departureAt',
		accessor: fp.flow(
			fp.get('patient.departureAt'),
			departureAt => departureAt ?
				moment(departureAt).format('DD/MM/YYYY') :
				'-||-'
		),
		filterable: false,
	},
	{
		Header: t('labels.type'),
		id: 'isDraft',
		accessor: fp.flow(
			fp.get('patient.departureAt'),
			departureAt => departureAt ?
				t('labels.epicrisis.done') : 
				t('labels.epicrisis.draft')
		),
		filterable: false,
	},
	{
		id: 'edit',
		width: 120,
		accessor: fp.identity,
		Cell: Controls,
		filterable: false,
	},
]
