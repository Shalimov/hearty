import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import { SubmitButton, Button, ValidatedInput, Form } from 'shared/components'

import styles from './styles'

const UserDetailsFormComponent = ({
	formModel,
	personalFirstName,
	personalLastName,
	personalEmail,
	personalPhoneNumber,
	username,
	password,
	confirmPassword,
	onInternalSubmit,
	onInternalCancel,
}) => (
	<Form className={css(styles.form)}>
		<div>
			<fieldset className={css(styles.fieldset)}>
				<legend className={css(styles.legend)}>Your details</legend>
				<div className={css(styles.row)}>
					<div className={css(styles.section)}>
						<div className={css(styles.inputWrapper)}>
							<ValidatedInput tabIndex="1" label="First name" strictShort field={personalFirstName} />
						</div>
						<div className={css(styles.inputWrapper)}>
							<ValidatedInput tabIndex="3" label="Email *" field={personalEmail} />
						</div>
					</div>
					<div className={css(styles.section)}>
						<div className={css(styles.inputWrapper)}>
							<ValidatedInput tabIndex="2" label="Last name" strictShort field={personalLastName} />
						</div>
						<div className={css(styles.inputWrapper)}>
							<ValidatedInput tabIndex="4" label="Phone number *" field={personalPhoneNumber} />
						</div>
					</div>
				</div>
			</fieldset>
			<fieldset className={css(styles.fieldset)}>
				<legend className={css(styles.legend)}>Preferred login details</legend>
				<div className={css(styles.row)}>
					<div className={css(styles.section)}>
						<div className={css(styles.inputWrapper)}>
							<ValidatedInput label="Username *" field={username} />
						</div>
					</div>
					<div className={css(styles.section)}>
						<div className={css(styles.inputFlatGroup)}>
							<div className={css(styles.inputFlatGroupMarginRight)}>
								<ValidatedInput
									type="password"
									label="Password *"
									autoComplete="off"
									field={password} />
							</div>
							<ValidatedInput
								type="password"
								label="Repeat password *"
								autoComplete="off"
								field={confirmPassword} />
						</div>
					</div>
				</div>
			</fieldset>
		</div>
		<div className={css(styles.buttonGroup)}>
			<div className={css(styles.buttonWrapper)}>
				<Button long outlined rounded onClick={onInternalCancel}>
					previous
				</Button>
			</div>
			<SubmitButton
				long
				rounded
				form={formModel}
				onSubmit={onInternalSubmit}
			>
				register
			</SubmitButton>
		</div>
	</Form>
)

UserDetailsFormComponent.propTypes = {
	// Form & Fields
	formModel: PropTypes.shape().isRequired,
	personalFirstName: PropTypes.shape().isRequired,
	personalLastName: PropTypes.shape().isRequired,
	personalEmail: PropTypes.shape().isRequired,
	personalPhoneNumber: PropTypes.shape().isRequired,
	username: PropTypes.shape().isRequired,
	password: PropTypes.shape().isRequired,
	confirmPassword: PropTypes.shape().isRequired,
	// Handlers
	onInternalSubmit: PropTypes.func.isRequired,
	onInternalCancel: PropTypes.func.isRequired,
}

export default UserDetailsFormComponent
