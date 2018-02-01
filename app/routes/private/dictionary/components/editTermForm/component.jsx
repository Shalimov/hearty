import React from 'react'
import PropTypes from 'prop-types'
import { Form, ValidatedInput } from 'shared/components'
import t from 'i18n'

const EditTermFormComponent = ({
	termField,
	onInternalSubmit,
}) => (
	<Form>
		<ValidatedInput
			field={termField}
			placeholder={t('buttons.addTerm')}
			flexible
			onPressEnter={onInternalSubmit} />
	</Form>
)

EditTermFormComponent.propTypes = {
	termField: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
}

export default EditTermFormComponent
