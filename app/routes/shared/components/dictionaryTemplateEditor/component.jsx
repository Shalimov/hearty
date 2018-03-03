import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'shared/components'
// import { css } from 'aphrodite'

// import styles from './styles'

const DictionaryTemplateEditorComponent = ({ term, onSelectTerm }) => (
	<div>
		{
			term ? term.render() : (
				<Button onClick={onSelectTerm}>
					Click to add template
				</Button>
			)
		}
	</div>
)

DictionaryTemplateEditorComponent.propTypes = {
	term: PropTypes.shape(),
	onSelectTerm: PropTypes.func.isRequired,
}

export default DictionaryTemplateEditorComponent
