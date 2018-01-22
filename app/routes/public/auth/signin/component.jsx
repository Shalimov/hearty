import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { BGImage } from 'shared/components'

import SignInForm from './components/signinForm'
import styles from './styles'

const SignInComponent = ({
	onSubmit,
}) => (
	<BGImage name="landing-bg" ext="jpg">
		<div className={css(styles.container)}>
			<div className={css(styles.signinContainer)}>
				<div className={css(styles.formContainer)}>
					<SignInForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	</BGImage>
)

SignInComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default observer(SignInComponent)
