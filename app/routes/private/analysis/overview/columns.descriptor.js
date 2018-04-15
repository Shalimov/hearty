import fp from 'lodash/fp'
import t from 'i18n'

export default (LeftControls, RightControls) => [
	{
		id: 'leftcontrols',
		width: 40,
		accessor: fp.identity,
		Cell: LeftControls,
	},
	{
		Header: t('labels.name'),
		accessor: 'name',
		width: 200,
	},
	{
		Header: t('labels.analysis.pattern'),
		accessor: 'pattern',
	},
	{
		Header: t('labels.type'),
		id: 'basic',
		width: 150,
		accessor: ({ basic }) => basic ?
			t('legends.basic') :
			t('legends.additional'),
	},
	{
		id: 'rightcontrols',
		width: 40,
		accessor: fp.identity,
		Cell: RightControls,
	},
]
