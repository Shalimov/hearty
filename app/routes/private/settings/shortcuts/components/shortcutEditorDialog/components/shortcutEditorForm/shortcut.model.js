import fp from 'lodash/fp'
import Ego from 'utils/validation'
import { TEXTAREA } from 'constants/shortcuts.commands'
import t from 'i18n'


export default ({ combination, command, params }) => ({
	combinationField: {
		initialValue: combination,
		scheme: Ego.string()
			.label(t('labels.shortcuts.combination'))
			.required(),
	},
	commandField: {
		initialValue: command,
		scheme: Ego.string()
			.label(t('labels.shortcuts.command'))
			.required(),
	},
	valueParamField: {
		initialValue: fp.get('value', params),
		scheme: Ego.string()
			.label(t('labels.shortcuts.parameters'))
			.requiredIf((value, ctx) => {
				return ctx.fields.commandField.value === TEXTAREA.DEFINED_PASTE
			}),
	},
})

export const mapping = [
	['combinationField', 'combination'],
	['commandField', 'command'],
	['valueParamField', 'params.value'],
]
