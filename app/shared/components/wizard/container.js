import fp from 'lodash/fp'
import { compose, withHandlers, withStateHandlers } from 'recompose'
import { connectWizard } from 'shared/hocs'

import WizardComponent from './companent'

const EMPTY_PROPS = {}
const getComponent = item => Array.isArray(item) ? item[0] : item
const getProps = item => Array.isArray(item) ? item[1] : EMPTY_PROPS

// TODO: Rebuild it afterall
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
	connectWizard,
	withHandlers({
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
	withHandlers({
		onSetStep: ({
			items,
			setStep,
			wizardData,
			currentStep,
			wizardHooks,
			onStepChanged,
			availableStepSelection,
		}) => async (step) => {
			if (availableStepSelection && items.length > step && step >= 0) {
				const data = await wizardHooks.onRequestData()
				const isPossibleToStepNext = await wizardHooks.onBeforeNext()

				if (!isPossibleToStepNext) {
					return undefined
				}

				wizardData.set(currentStep, data)
				setStep(step)
				onStepChanged && onStepChanged(step)
			}
		},

		onInternalSubmit: ({
			currentStep,
			items,
			onSubmit,
			wizardData,
			wizardHooks,
			incrementStep,
		}) => async (_data, options) => {
			const isLastStep = currentStep === (items.length - 1)
			const data = await wizardHooks.onRequestData()
			const isPossibleToStepNext = await wizardHooks.onBeforeNext()

			if (!isPossibleToStepNext) {
				return undefined
			}

			wizardData.set(currentStep, data)

			if (!isLastStep) {
				incrementStep()
				return undefined
			}

			const wizardCombinedData = fp.mergeAll([...wizardData.values()])

			return onSubmit(wizardCombinedData, options)
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
