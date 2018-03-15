import fp from 'lodash/fp'
import { compose, withHandlers, withStateHandlers } from 'recompose'
import { wizardExternalOpts } from 'shared/hocs'

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
		onSetStep: ({ items, setStep, onStepChanged, hasStepSelector }) => (step) => {
			if (hasStepSelector && items.length > step && step >= 0) {
				setStep(step)
				onStepChanged && onStepChanged(step)
			}
		},

		incrementStep: ({ items, currentStep, setStep, onStepChanged }) => () => {
			if (items.length > currentStep + 1) {
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
	wizardExternalOpts,
	withHandlers({
		onInternalSubmit: ({
			currentStep,
			items,
			onSubmit,
			wizardData,
			incrementStep,
			externalOpts,
		}) => (formData, options) => {
			const isLastStep = currentStep === (items.length - 1)
			const { transformSubmitData } = externalOpts

			wizardData.set(currentStep, transformSubmitData(formData))

			if (!isLastStep) {
				incrementStep()
				return undefined
			}

			return onSubmit(fp.mergeAllWith({}, [...wizardData.values()]), options)
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
