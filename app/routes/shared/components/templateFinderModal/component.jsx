import React, { Fragment } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
// import { css } from 'aphrodite'

import TemplateFinder from './components/templatesFinder'
import { dialogStyles } from './styles'

const TemplateFinderModalComponent = ({
	isOpen,
	submitText,
	onTrigger,
	onInternalSubmit,
	onRequestClose,
	children,
}) => (
	<Fragment>
		<Modal
			isOpen={isOpen}
			style={dialogStyles}
			onRequestClose={onRequestClose}>
			<TemplateFinder
				submitText={submitText}
				onSubmit={onInternalSubmit}
				onCancel={onRequestClose} />
		</Modal>
		{children(onTrigger)}
	</Fragment>
)

TemplateFinderModalComponent.propTypes = {
	submitText: PropTypes.string,
	isOpen: PropTypes.bool.isRequired,
	onTrigger: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
}

export default TemplateFinderModalComponent
