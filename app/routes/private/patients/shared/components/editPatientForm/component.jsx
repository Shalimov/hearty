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

const EditPatientFormComponent = ({
	fullnameField,
	birthdateField,
	regionField,
	addressField,
	formModel,
	onInternalSubmit,
	onCancel,
}) => (
	<Form className={css(styles.form)}>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.editPatient')}</legend>
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
					field={birthdateField}
				/>
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
					type="text"
					label={t('labels.address')}
					strictLong
					field={addressField} />
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

EditPatientFormComponent.propTypes = {
	fullnameField: PropTypes.shape().isRequired,
	birthdateField: PropTypes.shape().isRequired,
	regionField: PropTypes.shape().isRequired,
	addressField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default EditPatientFormComponent
