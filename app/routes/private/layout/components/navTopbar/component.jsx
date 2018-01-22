import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import FontAwesome from 'react-fontawesome'
import { Dropdown } from 'shared/components'

import styles from './styles'

const NavTopbarComponent = ({ user, menuItems, onItemClick }) => (
	<nav className={css(styles.container)}>
		<div className={css(styles.leftSection)}>
		</div>
		<div className={css(styles.rightSection)}>
			<Dropdown 
				onClick={onItemClick}
				renderHeader={(isOpen) => (
					<div className={css(styles.userMenuContainer)}>
						<span className={css(styles.userMenuText)}>
							{user.username}
						</span>
						&nbsp;
						<FontAwesome className={css(styles.icon)} size="3x" name="user-circle" />
						<React.Fragment>
							{
								isOpen ?
									<FontAwesome className={css(styles.userMenuCaret)} name="caret-up" /> :
									<FontAwesome className={css(styles.userMenuCaret)} name="caret-down" />
							}
						</React.Fragment>
					</div>
				)}
				renderItem={({ title, icon }) => (
					<React.Fragment>
						<FontAwesome name={icon} className={css(styles.userMenuItemIcon)} />
						<span className={css(styles.userMenuItemTitle)}>{title}</span>
					</React.Fragment>
				)}
				items={menuItems}
			/>
		</div>
	</nav>
)

NavTopbarComponent.propTypes = {
	onItemClick: PropTypes.func.isRequired,
	user: PropTypes.shape({ 
		username: PropTypes.string.isRequired,
	}).isRequired,
	menuItems: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.shape(), PropTypes.func])
	).isRequired,
}

export default observer(NavTopbarComponent)
