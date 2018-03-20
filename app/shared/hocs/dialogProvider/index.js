import fp from 'lodash/fp'
import { EventEmitter } from 'events'
import { Children } from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withContext, getContext, mapProps } from 'recompose'

// TODO remove node emitter here
const contextType = {
	dialogHub: PropTypes.shape(),
}

const noop = () => fp.noop
const FromChildrenComponent = ({ children }) => Children.only(children)
const DialogProvider = withContext(
	contextType,
	({ dialogHub }) => ({
		dialogHub: dialogHub || new Map(),
	})
)(FromChildrenComponent)

const connectDialogToHub = ({
	dialogId,
	open = noop,
	close = noop,
}) => {
	return compose(
		getContext(contextType),
		lifecycle({
			componentDidMount() {
				const emitter = new EventEmitter()
				const { dialogHub, id } = this.props
				const elementId = dialogId || id

				if (!elementId) {
					throw new Error('id attribute or dialogId property is necessary')
				}

				if (dialogHub.has(elementId)) {
					throw new Error(`dialog with the id ${elementId} is already in dialog hub`)
				}

				const controls = {
					open: open(this.props),
					close: close(this.props),
					onceData: emitter.once.bind(emitter, 'data'),
				}

				dialogHub.set(elementId, controls)

				this.setState({
					emitDialogAction(action, data) {
						emitter.emit(action, data)
					},
				})
			},

			componentWillUnmount() {
				const { dialogHub, id } = this.props
				const elementId = dialogId || id

				if (!dialogHub.delete(elementId)) {
					throw new Error(`Dialog hub tries to delete id ${elementId} which is not in hub`)
				}
			},
		})
	)
}

const withDialog = (dialogId, options) => {
	const propName = options.as || 'dialog'

	return compose(
		getContext(contextType),
		mapProps(({ dialogHub, ...props }) => ({
			[propName]: dialogHub.get(dialogId),
			...props,
		}))
	)
}

export {
	DialogProvider,
	connectDialogToHub,
	withDialog,
}
