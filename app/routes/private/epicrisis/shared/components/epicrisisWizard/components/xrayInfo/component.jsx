import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const XRayInfoComponent = ({
	formModel,
	xrayCRGOGKField,
	xrayCRGSkullField,
	xrayJointsRoentgenographyField,
	xrayOtherField,
	onSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.xrayInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={xrayCRGOGKField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={xrayCRGSkullField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={xrayJointsRoentgenographyField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={xrayOtherField} />
			</div>
			<div className={css(styles.buttonGroup)}>
				<div className={css(styles.buttonWrapper)}>
					<Button
						rounded
						outlined
						onClick={onCancel}>
						{t('buttons.back')}
					</Button>
				</div>
				<SubmitButton
					rounded
					form={formModel}
					onSubmit={onSubmit}>
					{t('buttons.next')}
				</SubmitButton>
			</div>
		</fieldset>
	</Form>
)

XRayInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	xrayCRGOGKField: PropTypes.shape().isRequired,
	xrayCRGSkullField: PropTypes.shape().isRequired,
	xrayJointsRoentgenographyField: PropTypes.shape().isRequired,
	xrayOtherField: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default XRayInfoComponent
