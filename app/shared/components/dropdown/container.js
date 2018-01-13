import { compose, withHandlers, withState, lifecycle, setStatic } from 'recompose'
import DropdownComponent from './component'

// TODO: think how to improve it
let globalCatcher = null
let internalClick = false

export default compose(
	setStatic('Separator', DropdownComponent.Separator),
	withState('isOpen', 'setOpenState', false),
	withHandlers({
		onToggleOpen: ({ setOpenState, isOpen }) => () => {
			internalClick = true
			setOpenState(!isOpen)
		},

		onInternalClick: ({ onClick, setOpenState }) => item => (event) => {
			internalClick = true

			if (onClick) {
				onClick(item, event)
			}
			
			setOpenState(false)
		},
	}),
	lifecycle({
		componentDidMount() {
			const { setOpenState } = this.props
			
			globalCatcher = () => {
				if (internalClick) {
					internalClick = false
					return undefined
				}

				setOpenState(false)
			}

			document.addEventListener('click', globalCatcher)
		}, 

		componentWillUnmount() {
			document.removeEventListener('click', globalCatcher)
		},
	})
)(DropdownComponent)
