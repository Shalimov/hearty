import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const ExaminationInfoComponent = ({
	formModel,
	examinagionOphthalmologistField,
	examinationENTDoctorField,
	examinationUrologicalField,
	examinationPhysiotherapistField,
	examinationPsychiatricField,
	examinationSurgeonField,
	examinationOncologistField,
	examinationMidwifeField,
	examinationOtherField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.examinationInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinagionOphthalmologistField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationENTDoctorField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationUrologicalField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationPhysiotherapistField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationPsychiatricField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationSurgeonField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationOncologistField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationMidwifeField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={examinationOtherField} />
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

ExaminationInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	examinagionOphthalmologistField: PropTypes.shape().isRequired,
	examinationENTDoctorField: PropTypes.shape().isRequired,
	examinationUrologicalField: PropTypes.shape().isRequired,
	examinationPhysiotherapistField: PropTypes.shape().isRequired,
	examinationPsychiatricField: PropTypes.shape().isRequired,
	examinationSurgeonField: PropTypes.shape().isRequired,
	examinationOncologistField: PropTypes.shape().isRequired,
	examinationMidwifeField: PropTypes.shape().isRequired,
	examinationOtherField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default ExaminationInfoComponent
