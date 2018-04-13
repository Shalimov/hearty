import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import ReactTable from 'react-table'
import { Button } from 'shared/components'
import { medicine } from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const MedicineGroupsOverviewComponent = ({
	data: { 
		medicineGroups = {},
		loading,
	},
	onFetchData,
	columns,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.medicine.groups')}</h2>
		<p className={css(styles.description)}>{t('descriptions.medicine.groups')}</p>
		<div className={css(styles.linkWrapper)}>
			<Link to={medicine.add()}>
				<Button iconed title={t('links.medicine.addGroup')}>
					<FontAwesome name="plus-square" className={css(styles.icon)} />
				</Button>
			</Link>
		</div>
		<ReactTable
			manual
			sortable={false}
			data={medicineGroups.content}
			pages={medicineGroups.totalPages}
			loading={loading}
			className="-highlight"
			onFetchData={onFetchData}
			columns={columns}
			indexKey="_id"
			pageSize={medicineGroups.pageSize}
			resizable={false} />
	</div>
)

MedicineGroupsOverviewComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default MedicineGroupsOverviewComponent
