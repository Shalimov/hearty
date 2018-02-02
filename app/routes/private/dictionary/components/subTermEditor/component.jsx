import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import { renderNothing } from 'recompose'

import InlineEditorPortal from '../inlineEditorPortal'
import EditTermInlineForm from '../editTermInlineForm'
import styles from './styles'

const SubTermEditorComponent = ({ item, columns, onInternalAddSubterm }) => (
	<div className={css(styles.container)}>
		<InlineEditorPortal
			selector={`.table_${item._id} .rt-tbody .rt-tr-group`}
			elseSelector={`.table_${item._id} .rt-tbody`}>
			<EditTermInlineForm onlyEditor onSubmit={onInternalAddSubterm} />
		</InlineEditorPortal>
		<ReactTable
			className={`table_${item._id}`}
			data={item.subTerms}
			columns={columns}
			pageSize={item.subTerms.length}
			showPagination={false}
			NoDataComponent={renderNothing()} />
	</div>
)

SubTermEditorComponent.propTypes = {
	item: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onInternalAddSubterm: PropTypes.func.isRequired,
}

export default SubTermEditorComponent
