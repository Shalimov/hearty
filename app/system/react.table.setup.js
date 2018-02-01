import { ReactTableDefaults } from 'react-table'
import t from 'i18n'

export default {
	init() {
		Object.assign(ReactTableDefaults, {
			showPageSizeOptions: false,
			showPageJump: false,
			className: '-highlight',
			noDataText: t('tables.notFound'),
			previousText: t('tables.prev'),
			nextText: t('tables.next'),
			loadingText: t('tables.loading'),
			pageText: t('tables.page'),
			ofText: t('tables.of'),
		})
	},
}
