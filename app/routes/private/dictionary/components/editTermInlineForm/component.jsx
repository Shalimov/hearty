import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import { Form, ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditTermInlineFormComponent = ({
	isEditting,
	termField,
	onEditMode,
	onInternalSubmit,
}) => (
	isEditting ? (
		<Form>
			<ValidatedInput
				field={termField}
				placeholder={t('buttons.addTerm')}
				flexible
				onPressEnter={onInternalSubmit} />
		</Form>
	) : (
		<div
			className={css(styles.nonEditableContainer)}
			title={t('hints.dblClickToEdit')}
			onDoubleClick={onEditMode}>
			{termField.value}
		</div>
	)
)

EditTermInlineFormComponent.propTypes = {
	isEditting: PropTypes.bool.isRequired,
	termField: PropTypes.shape().isRequired,
	onEditMode: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default EditTermInlineFormComponent
