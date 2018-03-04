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
	departureAtField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form className={css(styles.form)}>
		<div className={css(styles.rows)}>
			<fieldset className={css(styles.fieldset)}>
				<legend className={css(styles.formLegend)}>{t('legends.epicrisisInfo')}</legend>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="text"
						label={t('labels.epicrisisNo')}
						strictLong
						field={epicrisisNoField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="date"
						viewMode="days"
						label={t('labels.arrivalAt')}
						strictLong
						field={arrivalAtField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="date"
						viewMode="days"
						label={t('labels.departureAt')}
						strictLong
						field={departureAtField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="textarea"
						label={t('labels.jobInfo')}
						strictLong
						field={jobInfoField} />
				</div>
			</fieldset>
			<fieldset className={css(styles.fieldset)}>
				<legend className={css(styles.formLegend)}>{t('legends.patientsInfo')}</legend>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="text"
						label={t('labels.fullname')}
						strictLong
						field={fullnameField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="date"
						label={t('labels.birthdate')}
						strictLong
						field={birthdateField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="select"
						label={t('labels.region')}
						strictLong
						simpleValue
						searchable={false}
						clearable={false}
						labelKey="value"
						valueKey="id"
						options={t('regions')}
						field={regionField} />
				</div>
				<div className={css(styles.inputWrapper)}>
					<ValidatedInput
						type="textarea"
						label={t('labels.address')}
						strictLong
						field={addressField} />
				</div>
			</fieldset>
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
	departureAtField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default PatientIntoComponent
