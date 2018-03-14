import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton, ValidatedInput } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const SummaryInfoComponent = ({
	formModel,
	summaryField,
	departureAtField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.summary')}</legend>
			<p className={css(styles.hint)}>{t('hints.departureAtImportant')}</p>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					label={null}
					rows={4}
					flexible
					field={summaryField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="date"
					viewMode="days"
					field={departureAtField} />
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
				<div className={css(styles.buttonWrapper)}>
					<SubmitButton
						rounded
						form={formModel}
						onSubmit={onInternalSubmit}>
						{t('buttons.save')}
					</SubmitButton>
				</div>
				<SubmitButton
					rounded
					form={formModel}
					disabled={!departureAtField.value}
					onSubmit={onInternalSubmit}>
					{t('buttons.saveAndPrint')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

SummaryInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	summaryField: PropTypes.shape().isRequired,
	departureAtField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default SummaryInfoComponent
