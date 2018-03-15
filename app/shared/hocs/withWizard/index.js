import fp from 'lodash/fp'
import { lifecycle, withProps } from 'recompose'

const formDataSymbol = Symbol('formDataSymbol')

const externalOpts = Object.seal({
	transformSubmitData: fp.identity,
	formModelName: 'formModel',
	[formDataSymbol]: null,

	get currentFormData() {
		return this[formDataSymbol]
	},
})

export const wizardExternalOpts = withProps({
	externalOpts,
})

export const withWizard = (recievedOptions) => {
	Object.assign(externalOpts, recievedOptions)

	return lifecycle({
		componentDidMount() {
			this.componentWillReceiveProps(this.props)
		},

		componentWillReceiveProps(nextProps) {
			externalOpts[formDataSymbol] = fp.get(`${externalOpts.formModelName}.value`, nextProps)
		},

		componentWillUnmount() {
			externalOpts.transformSubmitData = fp.identity
			externalOpts.formModelName = 'formModelName'
			externalOpts[formDataSymbol] = null
		},
	})
}
