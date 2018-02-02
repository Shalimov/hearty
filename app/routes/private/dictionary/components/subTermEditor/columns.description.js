import fp from 'lodash/fp'
import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'
import t from 'i18n'

const { unit } = measures

export default (ControlsCellTemplate) => [
	{
		Header: t('labels.name'),
		accessor: 'term',
		sortable: false,
		style: {
			paddingLeft: toPx(2 * unit),
			whiteSpace: 'normal',
		},
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
