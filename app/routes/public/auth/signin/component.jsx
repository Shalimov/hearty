import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { auth } from 'routes/route.map'
import { Image } from 'shared/components'
import t from 'i18n'

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
				<div className={css(styles.linkBoxWrapper)}>
					<Link to={auth.signup()}
						className={css(styles.link)}>
						{t('links.signup')}
					</Link>
					<span className={css(styles.linkDelimiter)}>|</span>
					<Link to={auth.resetPassword()}
						className={css(styles.link)}>
						{t('links.forgotPassword')}?
					</Link>
				</div>
			</div>
		</div>
	</div>
)

SignInComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default observer(SignInComponent)
