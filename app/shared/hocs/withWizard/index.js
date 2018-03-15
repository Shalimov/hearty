import fp from 'lodash/fp'
import { lifecycle, withProps } from 'recompose'

const childComponentProps = Symbol('childComponentProps')

const externalOpts = Object.seal({
	transformSubmitData: fp.identity,
	[childComponentProps]: null,
	
	get childComponentProps() {
		return this[childComponentProps]
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
			externalOpts[childComponentProps] = nextProps
		},

		componentWillUnmount() {
			externalOpts.transformSubmitData = fp.identity
			externalOpts[childComponentProps] = null
		},
	})
}
