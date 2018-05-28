import { autorun } from 'mobx'
import { compose, pure, withState, withHandlers, lifecycle } from 'recompose'
import { DropTarget } from 'react-dnd'
import Ego from 'utils/validation'
import { withFormModel } from 'shared/hocs'
import SOURCES from 'constants/dnd.sources'

import BookmarksComponent from './component'

const disposerMap = new Map()

export default compose(
	pure,
	withFormModel({
		bookmarksField: Ego.string(),
	}, { spreadFields: true }),
	withState('isExpanded', 'setExpaned', false),
	DropTarget(SOURCES.DRAGGABLE_LABEL, {
		drop({ bookmarksField }, monitor) {
			const { text } = monitor.getItem()
			const content = bookmarksField.value
			bookmarksField.value = content ? `${content}\n${text}` : text
		},
	}, (connect, monitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	})),
	withHandlers({
		onToggle: ({ isExpanded, setExpaned }) => () => {
			setExpaned(!isExpanded)
		},
	}),
	lifecycle({
		componentDidMount() {
			const { formModel, onChange } = this.props

			let isFirstTime = true

			const disposer = autorun(() => {
				const { bookmarksField: bookmarks } = formModel.value

				if (!isFirstTime) {
					onChange(bookmarks)
				}

				isFirstTime = false
			})

			disposerMap.set(this, disposer)
		},

		componentWillUnmount() {
			const disposer = disposerMap.get(this)

			if (disposerMap.delete(this)) {
				disposer()
			}
		},
	})
)(BookmarksComponent)
