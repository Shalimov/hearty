import fp from 'lodash/fp'
import t from 'i18n'

export default (EditableCellTemplate, ControlsCellTemplate) => [
	{
		Header: t('labels.term'),
		id: 'term',
		accessor: fp.identity,
		Cell: EditableCellTemplate,
	},
	{
		id: 'controls',
		accessor: fp.identity,
		width: 40,
		style: {
			textAlign: 'center',
		},
		Cell: ControlsCellTemplate,
	},
]
