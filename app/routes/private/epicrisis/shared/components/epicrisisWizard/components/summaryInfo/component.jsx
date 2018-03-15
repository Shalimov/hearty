import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton, ValidatedInput } from 'shared/components'
import { DictionaryInput, TemplateFinderModal } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const EMPTY_STRING = ''

const SummaryInfoComponent = ({
	formModel,
	summaryField,
	departureAtField,
	isValidDate,
	onInternalSubmitAndPrint,
	onSubmit,
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
					isValidDate={isValidDate}
					field={departureAtField} />
				{/* workaround to make disabled attribute works, it's inside a function */}
				<input type="hidden" value={departureAtField.value || EMPTY_STRING} />
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
						onSubmit={onSubmit}>
						{t('buttons.save')}
					</SubmitButton>
				</div>
				<TemplateFinderModal onSubmit={onInternalSubmitAndPrint}>
					{
						onTrigger => (
							<SubmitButton
								rounded
								form={formModel}
								disabled={departureAtField.value == null}
								onSubmit={onTrigger}>
								{t('buttons.saveAndPrint')}
							</SubmitButton>
						)
					}
				</TemplateFinderModal>
			</div>
		</fieldset>
	</Form>
)

SummaryInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	summaryField: PropTypes.shape().isRequired,
	departureAtField: PropTypes.shape().isRequired,
	isValidDate: PropTypes.func.isRequired,
	onInternalSubmitAndPrint: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default observer(SummaryInfoComponent)
