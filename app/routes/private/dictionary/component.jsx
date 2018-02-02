import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'

import InlineEditorPortal from './components/inlineEditorPortal'
import EditTermInlineForm from './components/editTermInlineForm'
import styles from './styles'

const DictionaryComponent = ({
	data: { terms = {}, loading },
	columns,
	onAddTerm,
	onFetchData,
	SubTermEditor,
}) => (
	<div className={css(styles.container)}>
		<InlineEditorPortal
			selector=".term-table-anchor .rt-tbody .rt-tr-group"
			elseSelector=".term-table-anchor .rt-tbody">
			<EditTermInlineForm onlyEditor onSubmit={onAddTerm} />
		</InlineEditorPortal>
		<ReactTable
			manual
			sortable={false}
			className="term-table-anchor"
			data={terms.content}
			pages={terms.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={terms.pageSize}
			resizable={false}
			collapseOnDataChange={false}
			SubComponent={SubTermEditor} />
	</div>
)

DictionaryComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onAddTerm: PropTypes.func.isRequired,
	onFetchData: PropTypes.func.isRequired,
	SubTermEditor: PropTypes.func.isRequired,
}

export default DictionaryComponent
