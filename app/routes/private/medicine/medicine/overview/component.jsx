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

const MedicineOverviewComponent = ({
	data: {
		medicineGroup = {},
		loading,
	},
	pageSize,
	columns,
	onGoBack,
}) => (
	<div className={css(styles.container)}>
		<div className={css(styles.headerWrapper)}>
			<Button iconed onClick={onGoBack}>
				<FontAwesome name="chevron-circle-left" className={css(styles.icon, styles.backIcon)} />
			</Button>
			<h2 className={css(styles.header)}>{medicineGroup.groupName}</h2>
		</div>
		<p className={css(styles.description)}>{t('descriptions.medicine.drugs')}</p>
		<div className={css(styles.linkWrapper)}>
			<Link to={medicine.add()}>
				<Button iconed title={t('links.medicine.addGroup')}>
					<FontAwesome name="plus-square" className={css(styles.icon)} />
				</Button>
			</Link>
		</div>
		<ReactTable
			sortable={false}
			data={medicineGroup.listOfMedicaments}
			loading={loading}
			className="-highlight"
			columns={columns}
			pageSize={pageSize}
			indexKey="_id"
			resizable={false} />
	</div>
)

MedicineOverviewComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	pageSize: PropTypes.number.isRequired,
	onGoBack: PropTypes.func.isRequired,
}

export default MedicineOverviewComponent
