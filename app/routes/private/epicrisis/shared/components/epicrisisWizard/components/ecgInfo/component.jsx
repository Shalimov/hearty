import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const ECGInfoComponent = ({
	formModel,
	ecgArrivalField,
	ecgDynamicField,
	ecgKSField,
	ecgOtherField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.ecgInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={6}
					flexible
					field={ecgArrivalField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={6}
					flexible
					field={ecgDynamicField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={6}
					flexible
					field={ecgKSField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={6}
					flexible
					field={ecgOtherField} />
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

ECGInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	ecgArrivalField: PropTypes.shape().isRequired,
	ecgDynamicField: PropTypes.shape().isRequired,
	ecgKSField: PropTypes.shape().isRequired,
	ecgOtherField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default ECGInfoComponent
