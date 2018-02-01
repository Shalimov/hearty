import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import {
	Form,
	ValidatedInput,
	SubmitButton,
	Button,
} from 'shared/components'
import t from 'i18n'

import styles from './styles'

const EditTermFormComponent = ({
	termField,
	formModel,
	onInternalSubmit,
	onCancel,
}) => (
	<Form className={css(styles.form)}>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.editTerm')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="text"
					label={t('labels.term')}
					strictLong
					field={termField} />
			</div>
		</fieldset>
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
				{t('buttons.save')}
			</SubmitButton>
		</div>
	</Form>
)

EditTermFormComponent.propTypes = {
	termField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditTermFormComponent
