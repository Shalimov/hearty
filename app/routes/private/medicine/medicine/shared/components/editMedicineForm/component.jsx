import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, ValidatedInput, SubmitButton, Button } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditMedicineFormComponent = ({
	legend,
	nameField,
	prescriptionField,
	formModel,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{legend}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="text"
					field={nameField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="textarea"
					enableTemplates={false}
					flexible
					rows={4}
					field={prescriptionField} />
			</div>
			<div className={css(styles.buttonGroup)}>
				<div className={css(styles.buttonWrapper)}>
					<Button
						rounded
						outlined
						onClick={onCancel}>
						{t('buttons.back')}
					</Button>
				</div>
				<SubmitButton
					rounded
					form={formModel}
					onSubmit={onInternalSubmit}>
					{t('buttons.submit')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

EditMedicineFormComponent.propTypes = {
	legend: PropTypes.string.isRequired,
	nameField: PropTypes.shape().isRequired,
	prescriptionField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditMedicineFormComponent
