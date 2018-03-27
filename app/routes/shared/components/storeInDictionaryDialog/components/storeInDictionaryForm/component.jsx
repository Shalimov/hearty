import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton, ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const creatorPromptTextFactory = label => `${t('common.createTerm')}: ${label}`

const StoreInDictionaryFormComponent = ({
	loadOptions,
	formModel,
	termField,
	subtermField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.addToDictionary')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="creatable-async"
					flexible
					loadOptions={loadOptions}
					field={termField}
					promptTextCreator={creatorPromptTextFactory}
					searchPromptText={t('common.findExistingTerm')}
					noResultsText={t('common.notFound')}
					loadingPlaceholder={t('common.handlingProcess')}
					placeholder={!termField.value ? t('placeholders.dictionaries.searchTerm') : ''} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="textarea"
					enableTemplates={false}
					rows={4}
					flexible
					field={subtermField} />
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
					{t('buttons.save')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

StoreInDictionaryFormComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	termField: PropTypes.shape().isRequired,
	subtermField: PropTypes.shape().isRequired,
	loadOptions: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default observer(StoreInDictionaryFormComponent)
