import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { observer } from 'mobx-react'
import Modal from 'react-modal'

import StoreInDictionaryForm from './components/storeInDictionaryForm'
import styles, { dialogStyles } from './styles'

const StoreInDictionaryDialogComponent = ({
	isOpen,
	dialogData,
	onSubmit,
	onRequestClose,
}) => (
	<Modal isOpen={isOpen} style={dialogStyles} onRequestClose={onRequestClose}>
		<div className={css(styles.container)}>
			<StoreInDictionaryForm
				initialValues={dialogData}
				onSubmit={onSubmit}
				onCancel={onRequestClose} />
		</div>
	</Modal>
)


StoreInDictionaryDialogComponent.propTypes = {
	dialogData: PropTypes.shape(),
	isOpen: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
}

export default observer(StoreInDictionaryDialogComponent)
