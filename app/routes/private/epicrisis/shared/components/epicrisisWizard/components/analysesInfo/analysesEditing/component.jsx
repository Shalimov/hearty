import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import {
	Form,
	SubmitButton,
	Button,
	EmptyArea,
} from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const AnalysesEditingComponent = ({
	formModel,
	onSubmit,
	onCancel,
}) => fp.isEmpty(formModel.fields) ? (
	<EmptyArea>
		<p>{t('descriptions.epicrisisAnalysesExcluded')}</p>
		<div className={css(styles.buttonGroup, styles.attachToRight)}>
			<div className={css(styles.buttonWrapper)}>
				<Button
					tiny
					outlined
					rounded
					onClick={onCancel}>
					{t('buttons.back')}
				</Button>
			</div>
			<SubmitButton
				tiny
				rounded
				form={formModel}
				onSubmit={onSubmit}>
				{t('buttons.next')}
			</SubmitButton>
		</div>
	</EmptyArea>
) : (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.analysesEditing')}</legend>
			{
				fp.map((field) => (
					<div key={field.id} className={css(styles.inputWrapper)}>
						<DictionaryInput
							type="textarea"
							rows={3}
							flexible
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
