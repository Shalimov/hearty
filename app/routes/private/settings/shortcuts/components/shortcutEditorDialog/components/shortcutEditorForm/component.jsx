import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import {
	Form,
	ValidatedInput,
	SubmitButton,
} from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const ShortcutEditorFormComponent = ({
	showCommand,
	availableCommands,
	parametrizedCommands,
	combinationField,
	commandField,
	valueParamField,
	formModel,
	deniedCombinations,
	onInternalSubmit,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.legend)}>{t('legends.shortcuts.editor')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput type="shortcut"
					flexible
					deniedCombinations={deniedCombinations}
					label={t('labels.shortcuts.combination')}
					field={combinationField} />
			</div>
			{
				showCommand && (
					<div className={css(styles.inputWrapper)}>
						<ValidatedInput type="select"
							flexible
							simpleValue
							options={availableCommands}
							field={commandField} />
					</div>
				)
			}
			{
				parametrizedCommands.has(commandField.value) && (
					<div className={css(styles.inputWrapper)}>
						<DictionaryInput type="textarea"
							enableTemplates={false}
							flexible
							field={valueParamField} />
					</div>
				)
			}
			<div className={css(styles.buttons)}>
				<SubmitButton
					form={formModel}
					tiny
					rounded
					onSubmit={onInternalSubmit}>
					{t('buttons.save')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

ShortcutEditorFormComponent.propTypes = {
	showCommand: PropTypes.bool,
	parametrizedCommands: PropTypes.shape().isRequired,
	availableCommands: PropTypes.arrayOf(PropTypes.shape()),
	deniedCombinations: PropTypes.arrayOf(PropTypes.string),
	combinationField: PropTypes.shape().isRequired,
	commandField: PropTypes.shape().isRequired,
	valueParamField: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default observer(ShortcutEditorFormComponent)
