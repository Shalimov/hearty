import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const USDScopiaInfoComponent = ({
	formModel,
	usdScopiaOBPField,
	usdScopiaBCAField,
	usdScopiaFGDSField,
	usdScopiaBronchoscopyField,
	usdScopiaOtherField,
	onSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.usdScopiaInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					rows={4}
					flexible
					field={usdScopiaOBPField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					rows={4}
					flexible
					field={usdScopiaBCAField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					rows={4}
					flexible
					field={usdScopiaFGDSField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					rows={4}
					flexible
					field={usdScopiaBronchoscopyField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandable
					rows={4}
					flexible
					field={usdScopiaOtherField} />
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

USDScopiaInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	usdScopiaOBPField: PropTypes.shape().isRequired,
	usdScopiaBCAField: PropTypes.shape().isRequired,
	usdScopiaFGDSField: PropTypes.shape().isRequired,
	usdScopiaBronchoscopyField: PropTypes.shape().isRequired,
	usdScopiaOtherField: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default USDScopiaInfoComponent
