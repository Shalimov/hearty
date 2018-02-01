import { compose, lifecycle } from 'recompose'

import InlineEditorPortalComponent from './component'

// TODO: Could be refined
export default compose(
	lifecycle({
		componentWillMount() {
			this.setState({
				element: document.createElement('div'),
			})
		},

		componentDidMount() {
			const { element } = this.state
			const { selector, elseSelector } = this.props
			
			const mainContainer = document.querySelector(selector)
			if (mainContainer) {
				const parent = mainContainer.parentNode
				parent.insertBefore(element, mainContainer)
				return
			}

			const elesContainer = document.querySelector(elseSelector)
			elesContainer.appendChild(element)
			return
		},
	})
)(InlineEditorPortalComponent)

