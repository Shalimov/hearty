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
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.epicrisisInfo')}</legend>
			<div className={css(styles.rows)}>
				<div className={css(styles.block)}>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="text"
							label={t('labels.epicrisisNo')}
							field={epicrisisNoField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="date"
							viewMode="days"
							label={t('labels.arrivalAt')}
							field={arrivalAtField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="date"
							viewMode="days"
							label={t('labels.departureAt')}
							field={departureAtField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="textarea"
							rows={3}
							label={t('labels.jobInfo')}
							field={jobInfoField} />
					</div>
				</div>
				<div className={css(styles.block)}>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="text"
							label={t('labels.fullname')}
							field={fullnameField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="date"
							label={t('labels.birthdate')}
							field={birthdateField} />
					</div>
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="select"
							label={t('labels.region')}
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
							label={t('labels.address')}
							field={addressField} />
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
	departureAtField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default PatientIntoComponent
