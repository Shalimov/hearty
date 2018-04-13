import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, ValidatedInput, SubmitButton, Button } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditMedicineGroupFormComponent = ({
	legend,
	groupNameField,
	priorityField,
	noteField,
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
					field={groupNameField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="textarea"
					enableTemplates={false}
					flexible
					rows={4}
					field={noteField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="counter"
					strictShort
					min={1}
					max={100}
					field={priorityField} />
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

EditMedicineGroupFormComponent.propTypes = {
	legend: PropTypes.string.isRequired,
	groupNameField: PropTypes.shape().isRequired,
	priorityField: PropTypes.shape().isRequired,
	noteField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditMedicineGroupFormComponent
