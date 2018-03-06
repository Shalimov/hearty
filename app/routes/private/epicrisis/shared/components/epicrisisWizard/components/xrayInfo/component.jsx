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
	xrayJointsRoentgenography,
	xrayOther,
	onInternalSubmit,
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
					field={xrayJointsRoentgenography} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					rows={4}
					flexible
					field={xrayOther} />
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
					onSubmit={onInternalSubmit}>
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
	xrayJointsRoentgenography: PropTypes.shape().isRequired,
	xrayOther: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default XRayInfoComponent
