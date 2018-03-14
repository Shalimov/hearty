import fp from 'lodash/fp'
import { compose, withHandlers, withStateHandlers } from 'recompose'

import WizardComponent from './companent'

const EMPTY_PROPS = {}
const getComponent = item => Array.isArray(item) ? item[0] : item
const getProps = item => Array.isArray(item) ? item[1] : EMPTY_PROPS

export default compose(
	withStateHandlers(({ startStep, items, initialValues }) => ({
		steps: items,
		ActiveComponent: getComponent(items[startStep]),
		activeComponentProps: getProps(items[startStep]),
		initialValues: initialValues,
		componentData: initialValues,
		currentStep: startStep,
		wizardData: new Map(),
	}), {
		setStep: ({ steps, wizardData, initialValues }) => (currentStep) => ({
			currentStep,
			wizardData,
			componentData: Object.assign(initialValues, wizardData.get(currentStep)),
			ActiveComponent: getComponent(steps[currentStep]),
			activeComponentProps: getProps(steps[currentStep]),
		}),
	}),

	withHandlers({
		incrementStep: ({ items, currentStep, setStep, onStepChanged }) => () => {
			if (items.length  > currentStep + 1) {
				setStep(currentStep + 1)
				onStepChanged && onStepChanged(currentStep + 1)
			}
		},

		decrementStep: ({ currentStep, setStep, onStepChanged }) => () => {
			if (currentStep - 1 >= 0) {
				setStep(currentStep - 1)
				onStepChanged && onStepChanged(currentStep - 1)
			}
		},
	}),

	withHandlers({
		onInternalSubmit: ({
			currentStep,
			items,
			onSubmit,
			wizardData,
			incrementStep,
		}) => (formData) => {
			const isLastStep = currentStep === (items.length - 1)

			wizardData.set(currentStep, formData)

			if (!isLastStep) {
				incrementStep()
				return undefined
			}

			return onSubmit(fp.mergeAllWith({}, [...wizardData.values()]), wizardData)
		},

		onInternalCancel: ({
			currentStep,
			onCancel,
			decrementStep,
		}) => () => {
			const isFirstStep = currentStep === 0

			if (isFirstStep) {
				onCancel()
			} else {
				decrementStep()
			}
		},
	}),
)(WizardComponent)
