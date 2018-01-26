import fp from 'lodash/fp'
import t, { tp } from 'i18n'
import moment from 'moment'

import { EditLink } from './component'

export const columnsDescription = [{
	Header: t('labels.fullname'),
	accessor: 'fullname',
	filterable: false,
}, {
	Header: t('labels.birthdate'),
	id: 'birthdate',
	accessor: ({ birthdate }) => moment(birthdate).format('DD/MM/YYYY'),
	filterable: false,
}, {
	Header: t('labels.region'),
	id: 'region',
	accessor: ({ region }) => tp('regions', { id: Number(region) }),
	filterable: false,
}, {
	Header: t('labels.address'),
	accessor: 'address',
	filterable: false,
}, {
	id: 'edit',
	width: 30,
	accessor: fp.identity,
	Cell: EditLink,
	sortable: false,
	filterable: false,
}]
