import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { epicrisis } from 'routes/route.map'
import { Button } from 'shared/components'
import t from 'i18n'
import ReactTable from 'react-table'

import styles from './styles'

const OverviewEpicrisisComponent = ({
	data: { epicrises = {}, loading },
	columns,
	onFetchData,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.epicrises')}</h2>
		<p className={css(styles.description)}>{t('descriptions.epicrises')}</p>
		<div className={css(styles.linkWrapper)}>
			<Link to={epicrisis.add()}>
				<Button rounded outlined>
					{t('links.addEpicrisis')}
				</Button>
			</Link>
		</div>
		<ReactTable
			manual
			minRows={1}
			sortable={false}
			indexKey="_id"
			className="-highlight"
			data={epicrises.content}
			pages={epicrises.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={epicrises.pageSize}
			resizable={false} />
	</div>
)

OverviewEpicrisisComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default OverviewEpicrisisComponent
