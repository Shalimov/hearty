import fp from 'lodash/fp'
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose'
import SOURCES from 'constants/dnd.sources'
import { DropTarget } from 'react-dnd'

import BookmarksComponent from './component'

const toSet = collection => new Set(collection)
const toArray = set => [...set.values()]
const uniq = fp.flow(toSet, toArray)

export default compose(
	withStateHandlers((() => ({
		bookmarks: [],
		isExpanded: false,
	})), {
		setExpaned: () => isExpanded => ({ isExpanded }),

		addBookmark: ({ bookmarks }) => (bookmark) => ({
			bookmarks: uniq([...bookmarks, bookmark]),
		}),

		removeBookmark: ({ bookmarks }) => (bookmark) => {
			const bookmarkSet = toSet(bookmarks)
			bookmarkSet.delete(bookmark)

			return {
				bookmarks: toArray(bookmarkSet),
			}
		},
	}),
	DropTarget(SOURCES.DRAGGABLE_LABEL, {
		drop({ addBookmark }, monitor) {
			const { text } = monitor.getItem()
			addBookmark(text)
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

		onRemove: ({ removeBookmark }) => bookmark => () => {
			removeBookmark(bookmark)
		},
	}),
	lifecycle({
		componentDidUpdate(oldProps) {
			if (this.props.bookmarks !== oldProps.bookmarks) {
				const { onChange } = this.props
				onChange(this.props.bookmarks)
			}
		},
	})
)(BookmarksComponent)
