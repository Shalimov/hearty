import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import { Form, ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditInlineFormComponent = ({
	isEditting,
	field,
	onEditMode,
	onInternalSubmit,
}) => isEditting ? (
	<Form>
		<ValidatedInput
			field={field}
			label={null}
			flexible
			placeholder={t('placeholders.addName')}
			title={t('hints.enterAdd')}
			onPressEnter={onInternalSubmit} />
	</Form>
) : (
	<div
		className={css(styles.nonEditableContainer)}
		title={t('hints.dblClickToEdit')}
		onDoubleClick={onEditMode}>
		{field.value}
	</div>
)


EditInlineFormComponent.propTypes = {
	isTextarea: PropTypes.bool,
	isEditting: PropTypes.bool.isRequired,
	field: PropTypes.shape().isRequired,
	onEditMode: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default EditInlineFormComponent
