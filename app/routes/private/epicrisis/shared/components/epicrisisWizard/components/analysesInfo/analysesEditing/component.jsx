import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, ValidatedInput, SubmitButton, Button } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const AnalysesEditingComponent = ({
	formModel,
	onSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.analysesEditing')}</legend>
			{
				fp.map((field) => (
					<div key={field.id} className={css(styles.inputWrapper)}>
						<ValidatedInput
							type="textarea"
							rows={3}
							flexible
							smartTab
							field={field} />
					</div>
				), formModel.fields)
			}
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

AnalysesEditingComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AnalysesEditingComponent
