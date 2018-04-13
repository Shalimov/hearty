import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import { renderNothing } from 'recompose'

import InlineEditorPortal from '../inlineEditorPortal'
import EditInlineForm from '../editInlineForm'
import styles from './styles'

const MedicineEditorComponent = ({ item, columns, onInternalAddMedicine }) => (
	<div className={css(styles.container)}>
		<InlineEditorPortal
			selector={`.table_${item._id} .rt-tbody .rt-tr-group`}
			elseSelector={`.table_${item._id} .rt-tbody`}>
			<EditInlineForm
				onlyEditor
				onSubmit={onInternalAddMedicine} />
		</InlineEditorPortal>
		<ReactTable
			className={`table_${item._id}`}
			data={item.listOfMedicaments}
			columns={columns}
			pageSize={item.listOfMedicaments.length}
			showPagination={false}
			NoDataComponent={renderNothing()} />
	</div>
)

MedicineEditorComponent.propTypes = {
	item: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onInternalAddMedicine: PropTypes.func.isRequired,
}

export default MedicineEditorComponent
