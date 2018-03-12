import fp from 'lodash/fp'
import t from 'i18n'

export default (Controls) => [
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
		id: 'edit',
		width: 80,
		accessor: fp.identity,
		Cell: Controls,
	},
]
