import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import FontAwesome from 'react-fontawesome'
import { Button, ValidatedInput } from 'shared/components'
import t from 'i18n'

import InlineEditorPortal from './components/inlineEditorPortal'
import SubTermEditor from './components/subTermEditor'
import styles from './styles'

const DictionaryComponent = ({
	data: { terms = {}, loading },
	termField,
	columns,
	onFetchData,
}) => (
	<div className={css(styles.container)}>
		<InlineEditorPortal selector=".term-table-anchor .rt-tbody .rt-tr-group">
			<ValidatedInput field={termField} placeholder={t('buttons.addTerm')} flexible />
		</InlineEditorPortal>
		<ReactTable
			manual
			className="term-table-anchor"
			data={terms.content}
			pages={terms.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={terms.pageSize}
			resizable={false}
			SubComponent={SubTermEditor} />
	</div>
)

DictionaryComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	termField: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default DictionaryComponent
