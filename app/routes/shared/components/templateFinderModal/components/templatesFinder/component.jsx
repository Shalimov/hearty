import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ValidatedInput, Form, Button, SubmitButton } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const toOptions = fp.map(name => ({ label: name, value: name }))

const TemplatesFinderComponent = ({ 
	data,
	choosenTemplateField,
	formModel,
	submitText = t('buttons.print'),
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.chooseDocTemplate')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="select"
					isLoading={data.loading}
					options={toOptions(data.epicrisisTemplates)}
					strictLong
					simpleValue
					searchable={false}
					clearable={false}
					label={t('labels.docTemplate')}
					field={choosenTemplateField} />
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
					{submitText}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

TemplatesFinderComponent.propTypes = {
	submitText: PropTypes.string,
	data: PropTypes.shape().isRequired,
	choosenTemplateField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default TemplatesFinderComponent
