import fp from 'lodash/fp'
import t from 'i18n'

export default (LeftControls, RightControls) => [
	{
		id: 'leftControls',
		accessor: fp.identity,
		width: 40,
		style: {
			textAlign: 'center',
		},
		Cell: LeftControls,
	},
	{
		Header: t('labels.medicine.groups'),
		accessor: 'groupName',
	},
	{
		Header: t('labels.medicine.priority'),
		accessor: 'priority',
	},
	{
		Header: t('labels.medicine.count'),
		id: 'medicamentCount',
		accessor: 'listOfMedicaments.length',
	},
	{
		id: 'rightControls',
		accessor: fp.identity,
		width: 40,
		style: {
			textAlign: 'center',
		},
		Cell: RightControls,
	},
]
