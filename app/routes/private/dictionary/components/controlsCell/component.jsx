import React from 'react'
import PropTypes from 'prop-types'
import { Button, ConfirmModal } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import t from 'i18n'

const ControlsCellComponent = ({ onInternalRemove }) => (
	<ConfirmModal 
		confirmQuestionText={t('common.removeQuestion')}
		onConfirm={onInternalRemove}>
		{onTrigger => (
			<Button iconed onClick={onTrigger}>
				<FontAwesome name="trash" />
			</Button>
		)}
	</ConfirmModal>
)

ControlsCellComponent.propTypes = {
	onInternalRemove: PropTypes.func.isRequired,
}

export default ControlsCellComponent
