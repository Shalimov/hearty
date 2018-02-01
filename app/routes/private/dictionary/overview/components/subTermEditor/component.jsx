import fp from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import FontAwesome from 'react-fontawesome'
import { Button } from 'shared/components'
import t from 'i18n'

import columns from './columns.description'
import styles from './styles'

const SubTermEditorComponent = ({ subTerms }) => (
	<div className={css(styles.container)}>
		<div className={css(styles.buttonWrapper)}>
			<Button iconed>
				<FontAwesome name="plus" />{t('buttons.addSubTerm')}
			</Button>
		</div>
		{
			!fp.isEmpty(subTerms) && (
				<ReactTable
					data={subTerms}
					columns={columns}
					pageSize={subTerms.length}
					showPagination={false}
				/>
			)
		}
	</div>
)

SubTermEditorComponent.propTypes = {
	subTerms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default SubTermEditorComponent
