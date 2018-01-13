import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { Image } from 'shared/components'
import t from 'i18n'

import ForgotPasswordForm from './components/forgotPasswordForm'
import styles from './styles'

const ForgotPasswordComponent = ({ onSubmit }) => (
	<div className={css(styles.container)}>
		<div className={css(styles.imageContainer)}>
			<Image name="hearty-bg" ext="jpg" />
		</div>
		<div className={css(styles.resetContainer)}>
			<div>
				<h2 className={css(styles.pageHeader)}>{t('headers.forgotPassword')}?</h2>
				<p className={css(styles.pageDescription)}>{t('descriptions.forgotPassword')}</p>
			</div>
			<ForgotPasswordForm onSubmit={onSubmit} />
		</div>
	</div>
)

ForgotPasswordComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default observer(ForgotPasswordComponent)
