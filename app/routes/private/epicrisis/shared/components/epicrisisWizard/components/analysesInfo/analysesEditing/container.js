import fp from 'lodash/fp'
import { compose } from 'recompose'
import { withFormModel, withWizardHooks } from 'shared/hocs'
import Ego from 'utils/validation'

import AnalysesEditingComponent from './component'

const fpWithoutCap = fp.convert({ cap: false })

const createFieldName = (label, index) => `${label}_${index}`
const extractFieldName = (label) => {
	const index = label.lastIndexOf('_')
	return index === -1 ? label : label.substring(0, index)
}

const createFromAnalyses = fpWithoutCap.map(({ name, description }, index) => [
	createFieldName(name, index),
	{
		initialValue: description,
		scheme: Ego.string().label(name).required(),
	},
])

const toFormData = fp.flow(
	fp.entries,
	fp.map(([name, description]) => ({
		name: extractFieldName(name),
		description,
	})),
	analyses => ({ analyses }),
)

export default compose(
	withFormModel(({ wizardData, initialValues }) => {
		const wizardDataArray = [...wizardData.values()]
		const { selectedAnalyses } = Object.assign({}, ...wizardDataArray)
		const { analyses } = initialValues
		const analysesMap = fp.groupBy('name', analyses)

		let fieldPairs = null

		if (selectedAnalyses) {
			fieldPairs = fp.flatMap(
				({ name, analysis, repeatCount }) => fp.times(index => [
					createFieldName(name, index),
					{
						initialValue: fp.getOr(analysis.pattern, `${index}.description`, analysesMap[name]),
						scheme: Ego.string().label(name).required(),
					},
				], repeatCount),
				selectedAnalyses
			)
		} else {
			fieldPairs = createFromAnalyses(analyses)
		}

		return fp.fromPairs(fieldPairs)
	}),
	withWizardHooks({
		onRequestData: ({ formModel }) => (done) => {
			done(null, toFormData(formModel.value))
		},

		onBeforeNext: ({ formModel }) => (done) => {
			const { isValid } = formModel

			formModel.setTouched(true)

			done(null, isValid)
		},
	}),
)(AnalysesEditingComponent)
