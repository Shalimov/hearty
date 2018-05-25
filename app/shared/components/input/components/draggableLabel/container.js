import { DragSource } from 'react-dnd'
import SOURCES from 'constants/dnd.sources'

import DraggableLabelComponent from './component'

export default DragSource(SOURCES.DRAGGABLE_LABEL, {
	beginDrag: ({ text }) => ({ text }),
}, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(DraggableLabelComponent)
