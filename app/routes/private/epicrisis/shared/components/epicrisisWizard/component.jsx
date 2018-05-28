import fp from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import { Wizard } from 'shared/components'
import { Prompt } from 'react-router-dom'
import { css } from 'aphrodite'

import Bookmarks from './shared/components/bookmarks'
import styles from './styles'

const bookmarks = fp.get('bookmarks')

const EpicrisisWizardComponent = ({
	items,
	availableStepSelection,
	initialValues = {},
	onBookmarksChange,
	onMessage,
	onStepChanged,
	onContainerRef,
	onInternalSubmit,
	onCancel,
}) => (
	<div ref={onContainerRef} className={css(styles.epicrisisContainer)}>
		<Bookmarks bookmarks={bookmarks(initialValues)} onChange={onBookmarksChange} />
		<Prompt message={onMessage} />
		<Wizard
			startStep={0}
			items={items}
			availableStepSelection={availableStepSelection}
			initialValues={initialValues}
			onStepChanged={onStepChanged}
			onSubmit={onInternalSubmit}
			onCancel={onCancel} />
	</div>
)

EpicrisisWizardComponent.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.arrayOf(PropTypes.any),
		])
	),
	initialValues: PropTypes.shape(),
	availableStepSelection: PropTypes.bool,
	onBookmarksChange: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onMessage: PropTypes.func.isRequired,
	onStepChanged: PropTypes.func.isRequired,
	onContainerRef: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EpicrisisWizardComponent
