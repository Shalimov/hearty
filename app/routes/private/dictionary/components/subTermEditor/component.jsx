import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import { renderNothing } from 'recompose'

import InlineEditorPortal from '../inlineEditorPortal'
import EditTermInlineForm from '../editTermForm'
import columns from './columns.description'
import styles from './styles'

const { Fragment } = React

const SubTermEditorComponent = ({ item, onInternalAddSubterm }) => (
	<div className={css(styles.container)}>
		{
			<Fragment>
				<InlineEditorPortal
					selector={`.${item._id} .rt-tbody .rt-tr-group`}
					elseSelector={`.${item._id} .rt-tbody`}>
					<EditTermInlineForm onSubmit={onInternalAddSubterm} />
				</InlineEditorPortal>
				<ReactTable
					className={item._id}
					data={item.subTerms}
					columns={columns}
					pageSize={item.subTerms.length}
					showPagination={false}
					NoDataComponent={renderNothing()}
				/>
			</Fragment>
		}
	</div>
)

SubTermEditorComponent.propTypes = {
	item: PropTypes.shape().isRequired,
	onInternalAddSubterm: PropTypes.func.isRequired,
}

export default SubTermEditorComponent
