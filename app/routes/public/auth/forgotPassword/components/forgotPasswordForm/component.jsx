import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { ValidatedInput, Button, SubmitButton, Form } from 'shared/components'
import { auth } from 'routes/route.map'
import t from 'i18n'

import styles from './styles'

const ForgotPasswordFormComponent = ({
	formModel,
	emailField,
	onInternalSubmit,
}) => (
	<Form className={css(styles.form)}>
		<div className={css(styles.inputWrapper)}>
			<ValidatedInput
				type="text"
				label={t('labels.email')}
				strictLong
				field={emailField}
			/>
		</div>
		<div className={css(styles.buttonGroup)}>
			<Link to={auth.signin()} className={css(styles.linkButton)}>
				<Button
					long
					outlined
					rounded>
					{t('buttons.back')}
				</Button>
			</Link>
			<SubmitButton
				long
				rounded
				form={formModel}
				onSubmit={onInternalSubmit}>
				{t('buttons.submit')}
			</SubmitButton>
		</div>
	</Form>
)

ForgotPasswordFormComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	emailField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default ForgotPasswordFormComponent
