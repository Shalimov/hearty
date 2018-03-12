import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { analysis } from 'routes/route.map'
import { Button } from 'shared/components'
import t from 'i18n'
import ReactTable from 'react-table'

import styles from './styles'

const OverviewAnalysesComponent = ({
	data: { analyses = {}, loading },
	columns,
	onFetchData,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.analyses')}</h2>
		<p className={css(styles.description)}>{t('descriptions.analyses')}</p>
		<div className={css(styles.linkWrapper)}>
			<Link to={analysis.add()}>
				<Button rounded outlined>
					{t('links.addAnalysis')}
				</Button>
			</Link>
		</div>
		<ReactTable
			manual
			minRows={1}
			sortable={false}
			indexKey="_id"
			className="-highlight"
			data={analyses.content}
			pages={analyses.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={analyses.pageSize}
			resizable={false} />
	</div>
)

OverviewAnalysesComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default OverviewAnalysesComponent
