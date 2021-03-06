import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { epicrisis } from 'routes/route.map'
import { Button, Input } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import t from 'i18n'
import ReactTable from 'react-table'

import styles from './styles'

const OverviewEpicrisisComponent = ({
	data: { epicrises = {}, loading },
	columns,
	searchValue,
	filterValue,
	onFetchData,
	onOpenFolder,
	onSearchChange,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.epicrises')}</h2>
		<p className={css(styles.description)}>{t('descriptions.epicrises')}</p>
		<div className={css(styles.controls)}>
			<Input type="text"
				strictLong
				value={searchValue}
				placeholder={t('placeholders.search')}
				onChange={onSearchChange} />
			<div>
				<div className={css(styles.linkWrapper)}>
					<Link to={epicrisis.add()}>
						<Button iconed title={t('links.addEpicrisis')}>
							<FontAwesome name="plus-square" className={css(styles.icon)} />
						</Button>
					</Link>
				</div>
				<div className={css(styles.linkWrapper)}>
					<Button iconed
						title={t('buttons.epicrisis.openFolder')}
						onClick={onOpenFolder}>
						<FontAwesome name="folder-open" className={css(styles.icon)} />
					</Button>
				</div>
			</div>
		</div>
		<ReactTable
			manual
			minRows={1}
			sortable={false}
			indexKey="_id"
			className="-highlight"
			filterable
			filtered={filterValue}
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
	searchValue: PropTypes.string,
	filterValue: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onSearchChange: PropTypes.func.isRequired,
	onOpenFolder: PropTypes.func.isRequired,
	onFetchData: PropTypes.func.isRequired,
}

export default OverviewEpicrisisComponent
