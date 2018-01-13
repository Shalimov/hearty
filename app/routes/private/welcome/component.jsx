import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Image } from 'shared/components'

import styles from './styles'
import HelpSection from './components/helpSection'

const WelcomeComponent = ({ username }) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>Welcome {username}</h2>
		<h3 className={css(styles.description)}>Get Started with the Linius API 1.0</h3>
		<div className={css(styles.row)}>
			<div className={css(styles.apiPicBox)}>
				<Image name="asset-light" />
				<span className={css(styles.apiPicBoxV)}>v</span>
				<span className={css(styles.apiPicBoxNum)}>1.0</span>
			</div>
			<div className={css(styles.apiDescription)}>
				<p>With Linius API 1.0, you can lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua and test different calls and endpoints before pushing to production.</p>
				<br />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum at varius.</p>
			</div>
		</div>
		<div className={css(styles.row, styles.nthRow)}>
			<HelpSection
				imageName="asset-rocket"
				header="API Playground"
				action="get started">
				<p>
					Test calls in real-time with sample data.
				</p>
			</HelpSection>
			<HelpSection
				imageName="asset-ruby"
				header="API Specification"
				action="browse">
				<p>
					See all available API requests &amp; detailed documentation
				</p>
			</HelpSection>
		</div>
		<hr className={css(styles.divider, styles.nthRow)} />
	</div>
)

WelcomeComponent.propTypes = {
	username: PropTypes.string.isRequired,
}

export default WelcomeComponent
