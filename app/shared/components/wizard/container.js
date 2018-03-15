import fp from 'lodash/fp'
import { compose, withHandlers, withStateHandlers } from 'recompose'
import { wizardExternalOpts } from 'shared/hocs'
import { omitRecoursive } from 'utils/omit.recoursive'

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
	wizardExternalOpts,
	withHandlers({
		onSetStep: ({
			items,
			setStep,
			wizardData,
			currentStep,
			externalOpts,
			onStepChanged,
			availableStepSelection,
		}) => (step) => {
			if (availableStepSelection && items.length > step && step >= 0) {
				const { transformSubmitData, childComponentProps } = externalOpts

				// TODO: Temp solution
				const formData = fp.get('formModel.value', childComponentProps)
				wizardData.set(currentStep, transformSubmitData(childComponentProps, formData))

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
	withHandlers({
		onInternalSubmit: ({
			currentStep,
			initialValues,
			items,
			onSubmit,
			wizardData,
			incrementStep,
			externalOpts,
		}) => (formData, options) => {
			const isLastStep = currentStep === (items.length - 1)
			const { transformSubmitData, childComponentProps } = externalOpts

			wizardData.set(currentStep, transformSubmitData(childComponentProps, formData))

			if (!isLastStep) {
				incrementStep()
				return undefined
			}

			const wizardCombinedData = fp.mergeAll([initialValues, ...wizardData.values()])
			const cleanData = omitRecoursive(['__typename'], wizardCombinedData)

			return onSubmit(cleanData, options)
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
