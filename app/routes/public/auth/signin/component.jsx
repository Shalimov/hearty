import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Image } from 'shared/components'

import SignInForm from './components/signinForm'
import styles from './styles'

const SignInComponent = ({
	onSubmit,
}) => (
	<div className={css(styles.container)}>
		<div className={css(styles.imageContainer)}>
			<Image name="hearty-bg" ext="jpg" />
		</div>
		<div className={css(styles.signinContainer)}>
			<div>
				<div className={css(styles.formContainer)}>
					<SignInForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	</div>
)

SignInComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default observer(SignInComponent)
