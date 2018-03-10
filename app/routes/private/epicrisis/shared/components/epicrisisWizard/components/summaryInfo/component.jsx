import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const SummaryInfoComponent = ({
	formModel,
	summaryField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.summary')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					label={null}
					rows={4}
					flexible
					field={summaryField} />
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

SummaryInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	summaryField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default SummaryInfoComponent
