import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, ValidatedInput, Button, SubmitButton } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const DiagnosisInfoComponent = ({
	formModel,
	diagnosisField,
	diagnosisComplicationField,
	followingDiagnosisPartField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form className={css(styles.form)}>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.diagnosisInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="textarea"
					label={t('labels.diagnosis')}
					strictLong
					field={diagnosisField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="textarea"
					label={t('labels.diagnosisComplication')}
					strictLong
					field={diagnosisComplicationField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="date"
					label={t('labels.followingDiagnosisPart')}
					strictLong
					field={followingDiagnosisPartField} />
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
					{t('buttons.next')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

DiagnosisInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	diagnosisField: PropTypes.shape().isRequired,
	diagnosisComplicationField: PropTypes.shape().isRequired,
	followingDiagnosisPartField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default DiagnosisInfoComponent
