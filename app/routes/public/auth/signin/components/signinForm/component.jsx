import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { css } from 'aphrodite'
import { ValidatedInput, SubmitButton, Form } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const SignInFormComponent = ({
	formModel,
	emailField,
	passwordField,
	onInternalSubmit,
}) => (
	<Form className={css(styles.form)}>
		<fieldset>
			<legend className={css(styles.formLabel)}>{t('headers.welcome')}</legend>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput type="text" label={t('labels.email')} strictLong field={emailField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput 
					type="password"
					autoComplete="off" 
					label={t('labels.password')} 
					strictLong 
					field={passwordField} />
			</div>
			<SubmitButton
				long
				rounded
				form={formModel}
				onSubmit={onInternalSubmit}>
				{t('buttons.signin')}
			</SubmitButton>
		</fieldset>
	</Form>
)

SignInFormComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	emailField: PropTypes.shape().isRequired,
	passwordField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default observer(SignInFormComponent)
