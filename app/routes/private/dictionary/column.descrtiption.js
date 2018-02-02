import fp from 'lodash/fp'
import t from 'i18n'

export default (EditableCellTemplate) => [
	{
		Header: t('labels.term'),
		id: 'term',
		accessor: fp.identity,
		sortable: false,
		Cell: EditableCellTemplate,
	},
]
