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
		Header: t('labels.medicine.drug'),
		accessor: 'name',
	},
	{
		Header: t('labels.medicine.defaultPrescription'),
		id: 'prescription',
		accessor: fp.flow(
			fp.prop('prescription'),
			value => value || t('labels.medicine.noPrescription')
		),
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
