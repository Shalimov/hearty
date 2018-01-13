import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import Collapsible from 'react-collapsible'
import { css, cssx } from 'utils/aphrodite-ext'
import { board, tenants, tenantUsers } from 'routes/route.map'

import styles from './styles'

const SideBarTrigger = ({ title, icon, chevronDir = 'down' }) => (
	<button type="button" className={cssx({
		menuItemPsudoLink: true,
		menuCollapsableOpen: chevronDir !== 'down',
	}, styles)}>
		<div>
			<FontAwesome name={icon} className={css(styles.menuItemIcon, styles.menuItemLeftIcon)} />
			<span className={css(styles.menuItemTitle)}>{title}</span>
		</div>
		<FontAwesome name={`chevron-${chevronDir}`} className={css(styles.menuItemIcon)} />
	</button>
)

const SideBarLink = ({ url, title, icon, extraClass }) => (
	<NavLink to={url}
		exact
		className={css(styles.menuItemLink, extraClass)}
		activeClassName={css(extraClass, styles.menuItemLinkActive)}>
		{icon && <FontAwesome name={icon} className={css(styles.menuItemIcon, styles.menuItemLeftIcon)} />}
		<span className={css(styles.menuItemTitle)}>{title}</span>
	</NavLink>
)

const NavSidebarComponent = ({ user }) => (
	<aside className={css(styles.container)}>
		<menu className={css(styles.menu)}>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={board.index()} title="Welcome" icon="home" />
			</li>
			<li className={css(styles.menuItem)}>
				<Collapsible
					contentOuterClassName={css(styles.menuPaddingRemoval)}
					trigger={<SideBarTrigger title="Organisation" icon="folder-open" />}
					triggerWhenOpen={<SideBarTrigger title="Organisation" icon="folder-open" chevronDir="up" />}>
					<div className={css(styles.collapsableContent)}>
						<SideBarLink url={tenants.edit(user.tenantId)} title="Update details" extraClass={styles.submenuLink} />
						{/* <SideBarLink url={tenants.settings(user.tenantId)} title="Settings" extraClass={styles.submenuLink} /> */}
						<SideBarLink url={tenants.keys(user.tenantId)} title="API Keys" extraClass={styles.submenuLink} />
						<SideBarLink url={tenantUsers.index(user.tenantId)} title="Users" extraClass={styles.submenuLink} />
					</div>
				</Collapsible>
			</li>
		</menu>
	</aside>
)

SideBarTrigger.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	chevronDir: PropTypes.string,
}

SideBarLink.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	extraClass: PropTypes.shape(),
	icon: PropTypes.string,
}

NavSidebarComponent.propTypes = {
	user: PropTypes.shape({
		tenantId: PropTypes.string.isRequired,
	}).isRequired,
}

export default NavSidebarComponent
