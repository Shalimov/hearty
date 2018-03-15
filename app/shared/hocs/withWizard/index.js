import fp from 'lodash/fp'
import { lifecycle, withProps } from 'recompose'

const childComponentPropsKey = 'childComponentProps'
const childComponentProps = Symbol(childComponentPropsKey)

let focusedComponent = null
const optionsMap = Reflect.construct(WeakMap, [])

const externalOptsDefault = Object.seal({
	transformSubmitData: fp.identity,
	[childComponentProps]: null,
})

export const wizardExternalOpts = withProps({
	externalOpts: new Proxy({}, {
		get(traget, prop) {
			const options = optionsMap.get(focusedComponent)

			if (!options) {
				return options
			}

			if (prop === childComponentPropsKey) {
				return options[childComponentProps]
			}

			return options[prop]
		},
	}),
})

export const withWizard = (recievedOptions) =>
	(Component) => {
		const preparedOptions = Object.assign({}, externalOptsDefault, recievedOptions)
		
		return lifecycle({
			componentDidMount() {
				focusedComponent = Component
				optionsMap.set(focusedComponent, preparedOptions)
				this.componentWillReceiveProps(this.props)
			},

			componentWillReceiveProps(nextProps) {
				preparedOptions[childComponentProps] = nextProps
			},

			componentWillUnmount() {
				optionsMap.set(focusedComponent, externalOptsDefault)
				focusedComponent = null
			},
		})(Component)
	}

