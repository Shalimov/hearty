import { Children } from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withContext, getContext, mapProps } from 'recompose'

const contextType = {
	dialogHub: PropTypes.shape(),
}

const FromChildrenComponent = ({ children }) => Children.only(children)
const DialogProvider = withContext(
	contextType,
	({ dialogHub }) => ({
		dialogHub: dialogHub || new Map(),
	})
)(FromChildrenComponent)

const connectDialogToHub = ({
	dialogId,
	open,
	close,
	getData,
}) => {
	return compose(
		getContext(contextType),
		lifecycle({
			componentDidMount() {
				const { dialogHub, id } = this.props
				const elementId = dialogId || id

				if (!elementId) {
					throw new Error('id attribute or dialogId property is necessary')
				}

				if (dialogHub.has(elementId)) {
					throw new Error(`dialog with the id ${elementId} is already in dialog hub`)
				}

				dialogHub.set(elementId, {
					open: open(this.props),
					close: close(this.props),
					getData: getData(this.props),
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
