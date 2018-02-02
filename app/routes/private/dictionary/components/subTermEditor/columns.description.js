import { measures } from 'styles/variables'
import { toPx } from 'utils/styles'
import t from 'i18n'

const { unit } = measures

export default [
	{
		Header: t('labels.name'),
		accessor: 'term',
		sortable: false,
		style: {
			paddingLeft: toPx(2 * unit),
			whiteSpace: 'normal',
		},
	},
]
