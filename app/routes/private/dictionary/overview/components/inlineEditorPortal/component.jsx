import ReactDOM from 'react-dom'

const InlineEditorPortalComponent = ({ element, children }) => ReactDOM.createPortal(children, element)

export default InlineEditorPortalComponent
