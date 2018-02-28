import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { Form, Input } from 'shared/components'
import t from 'i18n'

import { dialogStyles } from './styles'

const DictionaryDialogComponent = ({
	applicationStateStore,
	loadOptions,
	onChange,
	onRequestClose,
}) => {
	const isOpen = applicationStateStore.uiState.dictionaryDialogStateOpen

	return (
		<Modal isOpen={isOpen} style={dialogStyles} onRequestClose={onRequestClose}>
			<Form>
				<Input
					type="select-async"
					flexible
					noBorder
					autoFocus
					loadOptions={loadOptions}
					onChange={onChange}
					searchPromptText={t('common.typeToSearch')}
					noResultsText={t('common.notFound')}
					loadingPlaceholder={t('common.handlingProcess')}
					placeholder={t('placeholders.dictionaries.search')} />
			</Form>
		</Modal>
	)
}

DictionaryDialogComponent.propTypes = {
	searchField: PropTypes.shape().isRequired,
	applicationStateStore: PropTypes.shape().isRequired,
	loadOptions: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
}

export default observer(DictionaryDialogComponent)
