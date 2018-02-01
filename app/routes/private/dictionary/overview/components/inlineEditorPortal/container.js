import { compose, lifecycle } from 'recompose'

import InlineEditorPortalComponent from './component'

export default compose(
	lifecycle({
		componentWillMount() {
			this.setState({
				element: document.createElement('div'),
			})
		},

		componentDidMount() {
			const { element } = this.state
			const { selector } = this.props
			const container = document.querySelector(selector)
			const parent = container.parentNode
			parent.insertBefore(element, container)
		},
	})
)(InlineEditorPortalComponent)

