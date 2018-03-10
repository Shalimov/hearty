import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

// TODO: Refactoring
const MedicineTakingRecommendationComponent = ({
	formModel,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.medicineTakingRec')}</legend>
			{
				fp.map((field) => (
					<div key={field.id} className={css(styles.inputWrapper)}>
						<DictionaryInput
							type="textarea"
							rows={2}
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
					onSubmit={onInternalSubmit}>
					{t('buttons.next')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

MedicineTakingRecommendationComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default MedicineTakingRecommendationComponent
