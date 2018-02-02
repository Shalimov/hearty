import React from 'react'
import PropTypes from 'prop-types'
import { Button, ConfirmModal } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import t from 'i18n'

const ControlsCellComponent = ({ onInternalRemoveTerm }) => (
	<ConfirmModal 
		confirmQuestionText={t('common.removeQuestion')}
		onConfirm={onInternalRemoveTerm}>
		{onTrigger => (
			<Button iconed onClick={onTrigger}>
				<FontAwesome name="trash" />
			</Button>
		)}
	</ConfirmModal>
)

ControlsCellComponent.propTypes = {
	onInternalRemoveTerm: PropTypes.func.isRequired,
}

export default ControlsCellComponent
