import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import { Form, ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditTermInlineFormComponent = ({
	isTextarea,
	isEditting,
	termField,
	onEditMode,
	onInternalSubmit,
}) => {
	const inputExtraProps = isTextarea ? {
		title: t('hints.ctrlEnterAdd'),
		rows: 4,
		type: 'textarea',
		enableTemplates: false,
		onPressCtrlEnter: onInternalSubmit,
	} : {
		title: t('hints.enterAdd'),
		onPressEnter: onInternalSubmit,
	}

	return isEditting ? (
		<Form>
			<ValidatedInput
				field={termField}
				label={null}
				placeholder={t('buttons.addTerm')}
				flexible
				{...inputExtraProps} />
		</Form>
	) : (
		<div
			className={css(styles.nonEditableContainer)}
			title={t('hints.dblClickToEdit')}
			onDoubleClick={onEditMode}>
			{termField.value}
		</div>
	)
}

EditTermInlineFormComponent.propTypes = {
	isTextarea: PropTypes.bool,
	isEditting: PropTypes.bool.isRequired,
	termField: PropTypes.shape().isRequired,
	onEditMode: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default EditTermInlineFormComponent
