import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const ECGEchoInfoComponent = ({
	formModel,
	ecgEchoArrivalField,
	ecgEchoDynamicField,
	ecgEchoKSField,
	ecgEchoOtherField,
	onSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.ecgEchoInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={ecgEchoArrivalField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={ecgEchoDynamicField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={ecgEchoKSField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={ecgEchoOtherField} />
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
					onSubmit={onSubmit}>
					{t('buttons.next')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

ECGEchoInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	ecgEchoArrivalField: PropTypes.shape().isRequired,
	ecgEchoDynamicField: PropTypes.shape().isRequired,
	ecgEchoKSField: PropTypes.shape().isRequired,
	ecgEchoOtherField: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default ECGEchoInfoComponent
