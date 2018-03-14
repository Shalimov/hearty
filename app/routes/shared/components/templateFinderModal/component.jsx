import React, { Fragment } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
// import { css } from 'aphrodite'

import TemplateFinder from './components/templatesFinder'
import { dialogStyles } from './styles'

const TemplateFinderModalComponent = ({
	isOpen,
	onTrigger,
	onSubmit,
	onRequestClose,
	children,
}) => (
	<Fragment>
		<Modal
			isOpen={isOpen}
			style={dialogStyles}
			onRequestClose={onRequestClose}>
			<TemplateFinder
				onSubmit={onSubmit}
				onCancel={onRequestClose} />
		</Modal>
		{children(onTrigger)}
	</Fragment>
)

TemplateFinderModalComponent.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onTrigger: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired,
}

export default TemplateFinderModalComponent
