import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, ValidatedInput, Button, SubmitButton } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const PatientIntoComponent = ({
	formModel,
	epicrisisNoField,
	fullnameField,
	birthdateField,
	regionField,
	jobInfoField,
	addressField,
	arrivalAtField,
	isValidDate,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.epicrisisInfo')}</legend>
			<div className={css(styles.rows)}>
				<div className={css(styles.block)}>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="text"
							field={fullnameField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="date"
							isValidDate={isValidDate}
							field={birthdateField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="select"
							simpleValue
							searchable={false}
							clearable={false}
							labelKey="value"
							valueKey="value"
							options={t('regions')}
							field={regionField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="textarea"
							rows={3}
							field={addressField} />
					</div>
				</div>
				<div className={css(styles.block)}>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="text"
							field={epicrisisNoField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="date"
							viewMode="days"
							isValidDate={isValidDate}
							field={arrivalAtField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="textarea"
							rows={3}
							field={jobInfoField} />
					</div>
				</div>
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
				{t('buttons.next')}
			</SubmitButton>
		</div>
	</Form>
)

PatientIntoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	epicrisisNoField: PropTypes.shape().isRequired,
	fullnameField: PropTypes.shape().isRequired,
	birthdateField: PropTypes.shape().isRequired,
	regionField: PropTypes.shape().isRequired,
	jobInfoField: PropTypes.shape().isRequired,
	addressField: PropTypes.shape().isRequired,
	arrivalAtField: PropTypes.shape().isRequired,
	isValidDate: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default PatientIntoComponent
