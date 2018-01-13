import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Button, Image } from 'shared/components'

import styles from './styles'

const HelpSectionComponent = ({ imageName, header, action, onActionClick, children }) => (
	<div className={css(styles.container)}>
		<div>
			<Image name={imageName} />
		</div>
		<div className={css(styles.divider)}></div>
		<div className={css(styles.descriptionColumn)}>
			<div className={css(styles.descriptionBlock)}>
				<h2 className={css(styles.blockHeader)}>
					{header}
				</h2>
				<div className={css(styles.blockDescription)}>
					{children}
				</div>
			</div>
			<div>
				<Button rounded onClick={onActionClick}>{action}</Button>
			</div>
		</div>
	</div>
)

HelpSectionComponent.propTypes = {
	header: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired,
	imageName: PropTypes.string.isRequired,
	children: PropTypes.node,
	onActionClick: PropTypes.func,
}

export default HelpSectionComponent
