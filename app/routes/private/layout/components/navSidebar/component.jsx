import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import { css, cssx } from 'utils/aphrodite-ext'
import { Image } from 'shared/components'
import {
	board,
	dictionary,
	medicine,
	epicrisis,
	analysis,
} from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const SideBarTrigger = ({ title, icon, chevronDir = 'down' }) => (
	<button type="button" className={cssx({
		menuItemPsudoLink: true,
		menuCollapsableOpen: chevronDir !== 'down',
	}, styles)}>
		<div>
			<FontAwesome name={icon} className={css(styles.menuItemIcon, styles.menuItemLeftIcon)} />
			<span className={css(styles.menuItemTitle)}>{t(title)}</span>
		</div>
		<FontAwesome name={`chevron-${chevronDir}`} className={css(styles.menuItemIcon)} />
	</button>
)

const SideBarLink = ({ url, title, icon, exact = false, extraClass }) => (
	<NavLink to={url}
		exact={exact}
		className={css(styles.menuItemLink, extraClass)}
		activeClassName={css(extraClass, styles.menuItemLinkActive)}>
		{icon && <FontAwesome name={icon} className={css(styles.menuItemIcon, styles.menuItemLeftIcon)} />}
		<span className={css(styles.menuItemTitle)}>{t(title)}</span>
	</NavLink>
)

const NavSidebarComponent = () => (
	<aside className={css(styles.container)}>
		<menu className={css(styles.menu)}>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={board.index()} title="links.main" exact={true} icon="home" />
			</li>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={epicrisis.index()} title="links.epicrisis" icon="file-text" />
			</li>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={analysis.index()} title="links.analysis" icon="line-chart" />
			</li>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={medicine.index()} title="links.medicine.groups" icon="medkit" />
			</li>
			<li className={css(styles.menuItem)}>
				<SideBarLink url={dictionary.index()} title="links.dictionary" icon="book" />
			</li>
		</menu>
		<div className={css(styles.imageContainer)}>
			<Image name="dna-chain" small />
		</div>
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
	exact: PropTypes.bool,
	extraClass: PropTypes.shape(),
	icon: PropTypes.string,
}

export default NavSidebarComponent
