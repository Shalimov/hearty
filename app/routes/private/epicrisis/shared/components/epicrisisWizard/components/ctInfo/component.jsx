import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Form, Button, SubmitButton } from 'shared/components'
import { DictionaryInput } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const CTInfoComponent = ({
	formModel,
	ctHeadField,
	ctOGKField,
	ctOBPField,
	ctOtherField,
	onInternalSubmit,
	onCancel,
}) => (
	<Form>
		<fieldset>
			<legend className={css(styles.formLegend)}>{t('legends.ctInfo')}</legend>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={ctHeadField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={ctOGKField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={ctOBPField} />
			</div>
			<div className={css(styles.inputWrapper)}>
				<DictionaryInput
					type="textarea"
					expandOnFocus
					rows={4}
					flexible
					field={ctOtherField} />
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

CTInfoComponent.propTypes = {
	formModel: PropTypes.shape().isRequired,
	ctHeadField: PropTypes.shape().isRequired,
	ctOGKField: PropTypes.shape().isRequired,
	ctOBPField: PropTypes.shape().isRequired,
	ctOtherField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default CTInfoComponent
