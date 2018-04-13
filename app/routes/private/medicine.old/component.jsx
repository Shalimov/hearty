import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import t from 'i18n'

import InlineEditorPortal from './components/inlineEditorPortal'
import EditInlineForm from './components/editInlineForm'
import styles from './styles'

const MedicineComponent = ({
	data: { medicineGroups = {}, loading },
	columns,
	onAddGroup,
	onFetchData,
	MedicineEditor,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.medicine')}</h2>
		<p className={css(styles.description)}>{t('descriptions.medicine')}</p>
		<InlineEditorPortal
			selector=".medicine-table-anchor .rt-tbody .rt-tr-group"
			elseSelector=".medicine-table-anchor .rt-tbody">
			<EditInlineForm onlyEditor onSubmit={onAddGroup} />
		</InlineEditorPortal>
		<ReactTable
			manual
			sortable={false}
			className="medicine-table-anchor"
			data={medicineGroups.content}
			pages={medicineGroups.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			indexKey="_id"
			pageSize={medicineGroups.pageSize}
			resizable={false}
			collapseOnDataChange={false}
			SubComponent={MedicineEditor} />
	</div>
)

MedicineComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onAddGroup: PropTypes.func.isRequired,
	onFetchData: PropTypes.func.isRequired,
	MedicineEditor: PropTypes.func.isRequired,
}

export default MedicineComponent
