import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import { Form, ValidatedInput } from 'shared/components'
import t from 'i18n'
import { css } from 'aphrodite'

import styles, { dialogStyles } from './styles'

/* eslint-disable */
const inputRenderer = props => (
	<div className={css(styles.container)}>
		<FontAwesome name="search" className={css(styles.icon)} />
		<input {...props} className={[props.className, css(styles.internalInput)].join(' ')} />
	</div>
)
/* eslint-enable */

const DictionaryDialogComponent = ({
	searchField,
	applicationStateStore,
	onRequestClose,
}) => {
	const isOpen = applicationStateStore.uiState.dictionaryDialogStateOpen

	return (
		<Modal isOpen={isOpen} style={dialogStyles} onRequestClose={onRequestClose}>
			<Form>
				<ValidatedInput
					type="select"
					flexible
					noBorder
					autoFocus
					wrapperStyle={{ display: 'block' }}
					inputRenderer={inputRenderer}
					field={searchField}
					noResultsText={t('common.notFound')}
					placeholder={t('placeholders.dictionaries.search')} />
			</Form>
		</Modal>
	)
}

DictionaryDialogComponent.propTypes = {
	searchField: PropTypes.shape().isRequired,
	applicationStateStore: PropTypes.shape().isRequired,
	onRequestClose: PropTypes.func.isRequired,
}

export default observer(DictionaryDialogComponent)
