import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import FontAwesome from 'react-fontawesome'
import { Button, ValidatedInput } from 'shared/components'
import { patients as patientsUrl } from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const EditLink = ({ value }) => (
	<Link to={patientsUrl.edit(value._id)}>
		<Button iconed><FontAwesome name="pencil" /></Button>
	</Link>
)

const OverviewPatientComponent = ({
	data: { patients = {}, loading },
	columns,
	filtered,
	searchField,
	onFetchData,
	onSearch,
}) => (
	<div className={css(styles.container)}>
		<h1 className={css(styles.header)}>{t('links.patients')}</h1>
		<div className={css(styles.searchPanel)}>
			<ValidatedInput strictLong strictHigh field={searchField} placeholder={t('placeholders.search')} />
			<div className={css(styles.searchButtonWrapper)}>
				<Button id="search-btn" rounded onClick={onSearch}>{t('buttons.search')}</Button>
			</div>
		</div>
		<div className={css(styles.controlPanel)}>
			<div className={css(styles.controls)}>
				<Link id="add-user-link" to={patientsUrl.add()}>
					<Button transparent>
						<FontAwesome size="2x" name="plus-circle" />
						<span className={css(styles.buttonText)}>{t('links.addPatient')}</span>
					</Button>
				</Link>
			</div>
		</div>
		<ReactTable
			manual
			filterable
			filtered={filtered}
			data={patients.content}
			pages={patients.totalPages}
			loading={loading}
			onFetchData={onFetchData}
			columns={columns}
			pageSize={patients.pageSize}
			resizable={false}
			minRows={1}
		/>
	</div>
)

OverviewPatientComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	filtered: PropTypes.arrayOf(PropTypes.shape()),
	searchField: PropTypes.shape().isRequired,
	onFetchData: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired,
}

EditLink.propTypes = {
	value: PropTypes.shape().isRequired,
}

export default OverviewPatientComponent
export { EditLink }
