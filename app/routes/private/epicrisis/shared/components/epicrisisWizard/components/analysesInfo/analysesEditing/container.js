import fp from 'lodash/fp'
import { compose } from 'recompose'
import { withFormModel, withWizard } from 'shared/hocs'
import Ego from 'utils/validation'

import AnalysesEditingComponent from './component'

const createFieldName = (label, index) => `${label}_${index}`
const extractFieldName = (label) => {
	const index = label.lastIndexOf('_')
	return index === -1 ? label : label.substring(0, index)
}

export default compose(
	withFormModel(({ wizardData, initialValues }) => {
		const wizardDataArray = [...wizardData.values()]
		const { selectedAnalyses } = Object.assign({}, ...wizardDataArray)
		const { analyses } = initialValues
		const analysesMap = fp.groupBy('name', analyses)

		const pairs = fp.flatMap(
			({ name, analysis, repeatCount }) => fp.times(index => [
				createFieldName(name, index),
				{
					initialValue: fp.getOr(analysis.pattern, `${index}.description`, analysesMap[name]),
					scheme: Ego.string().label(name).required(),
				},
			], repeatCount),
			selectedAnalyses
		)

		return fp.fromPairs(pairs)
	}),
	withWizard({
		transformSubmitData: fp.flow(
			fp.entries,
			fp.map(([name, description]) => ({
				name: extractFieldName(name),
				description,
			})),
			analyses => ({ analyses }),
		),
	})
)(AnalysesEditingComponent)
