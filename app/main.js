import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import Appication from './app.container'

document.addEventListener('DOMContentLoaded', () => {
	const appElement = document.querySelector('#app')
	Modal.setAppElement(appElement)
	ReactDOM.render(<Appication />, appElement)
})
