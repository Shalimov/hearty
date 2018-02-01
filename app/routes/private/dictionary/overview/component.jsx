import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import FontAwesome from 'react-fontawesome'
import { Button } from 'shared/components'
import { dictionary } from 'routes/route.map'
import t from 'i18n'

import SubTermEditor from './components/subTermEditor'
import styles from './styles'

const DictionaryComponent = ({
	data: { terms = {}, loading },
	columns,
	onFetchData,
}) => (
	<div className={css(styles.container)}>
		<div className={css(styles.buttonWrapper)}>
			<Link to={dictionary.add()}>
				<Button iconed>
					<FontAwesome name="plus" />{t('buttons.addTerm')}
				</Button>
			</Link>
		</div>
		<ReactTable
			manual
			data={terms.content}
			pages={terms.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={terms.pageSize}
			resizable={false}
			SubComponent={SubTermEditor}
		/>
	</div>
)

DictionaryComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default DictionaryComponent
