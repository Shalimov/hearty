import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { PasteFromDictionaryDialog, StoreInDictionaryDialog } from 'routes/shared/components'

import NavSidebar from './components/navSidebar'
import NavTopbar from './components/navTopbar'
import styles from './styles'

const LayoutComponent = ({ children }) => (
	<div className={css(styles.column)}>
		<StoreInDictionaryDialog />
		<PasteFromDictionaryDialog />
		<NavTopbar />
		<div className={css(styles.row)}>
			<NavSidebar />
			<div className={css(styles.innerView)}>{children}</div>
		</div>
	</div>
)

LayoutComponent.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutComponent
