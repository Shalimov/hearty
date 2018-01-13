import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { ValidatedInput, Button, SubmitButton, Form } from 'shared/components'
import { auth } from 'routes/route.map'

import styles from './styles'

const ChangePasswordFormComponent = ({
	formModel,
	codeField,
	usernameField,
	newPasswordField,
	onInternalSubmit,
}) => (
	<Form className={css(styles.form)}>
		<div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="text"
					label="Code"
					strictLong
					field={codeField}
				/>
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="text"
					label="Username"
					strictLong
					field={usernameField}
				/>
			</div>
			<div className={css(styles.inputWrapper)}>
				<ValidatedInput
					type="password"
					label="New Password"
					strictLong
					field={newPasswordField}
				/>
			</div>
		</div>
		<div className={css(styles.buttonGroup)}>
			<Link to={auth.signin()} className={css(styles.linkButton)}>
				<Button
					long
					outlined
					rounded>
						cancel
				</Button>
			</Link>
			<SubmitButton
				long
				rounded
				form={formModel}
				onSubmit={onInternalSubmit}>
					submit
			</SubmitButton>
		</div>
	</Form>
)

ChangePasswordFormComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	codeField: PropTypes.shape().isRequired,
	usernameField: PropTypes.shape().isRequired,
	newPasswordField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default ChangePasswordFormComponent
