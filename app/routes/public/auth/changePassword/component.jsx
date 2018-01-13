import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Image } from 'shared/components'

import ChangePasswordForm from './components/changePasswordForm'
import styles from './styles'

const ChangePasswordComponent = ({ onSubmit }) => (
	<div className={css(styles.container)}>
		<div className={css(styles.imageContainer)}>
			<Image name="hearty-bg" ext="jpg" />
		</div>
		<div className={css(styles.resetContainer)}>
			<div>
				<h2 className={css(styles.pageHeader)}>Change password</h2>
				<p className={css(styles.pageDescription)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<ChangePasswordForm onSubmit={onSubmit} />
		</div>
	</div>
)

ChangePasswordComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default observer(ChangePasswordComponent)
