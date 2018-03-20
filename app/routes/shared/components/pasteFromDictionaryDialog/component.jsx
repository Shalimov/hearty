import React from 'react'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import Finder from './components/finder'

import styles, { dialogStyles } from './styles'

const PasteFromDictionaryDialogComponent = ({
	isOpen,
	onTermSearch,
	onSubtermSearch,
	onChange,
	onRequestClose,
}) => (
	<Modal isOpen={isOpen} style={dialogStyles} onRequestClose={onRequestClose}>
		<div className={css(styles.container)}>
			<Finder
				onSelect={onChange}
				onTermSearch={onTermSearch}
				onSubtermSearch={onSubtermSearch} />
		</div>
	</Modal>
)


PasteFromDictionaryDialogComponent.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onTermSearch: PropTypes.func.isRequired,
	onSubtermSearch: PropTypes.func.isRequired,
}

export default observer(PasteFromDictionaryDialogComponent)
