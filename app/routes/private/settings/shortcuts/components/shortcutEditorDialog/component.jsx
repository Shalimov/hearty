import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import ShortcutEditorForm from './components/shortcutEditorForm'
import { dialogStyles } from './styles'

const ShortcutEditorDialogComponent = ({
	isOpen,
	editorParams = {},
	onSubmit,
	onRequestClose,
}) => (
	<Modal isOpen={isOpen} style={dialogStyles} onRequestClose={onRequestClose}>
		<ShortcutEditorForm onSubmit={onSubmit} {...editorParams} />
	</Modal>
)

ShortcutEditorDialogComponent.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	editorParams: PropTypes.shape(),
	onSubmit: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
}

export default ShortcutEditorDialogComponent
