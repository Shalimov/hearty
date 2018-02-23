import React from 'react'
import PropTypes from 'prop-types'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'
import { Button, ValidatedInput } from 'shared/components'
import t from 'i18n'

const { Fragment } = React

const DictionaryInputComponent = ({ openFromDictionaryDialog, ...params }) => (
	<Fragment>
		<ContextMenuTrigger id="dictionary-context-input">
			<ValidatedInput {...params} />
		</ContextMenuTrigger>
		<ContextMenu id="dictionary-context-input">
			<MenuItem>
				<Button iconed onClick={openFromDictionaryDialog}>
					{t('descriptions.fromDictionary')}
				</Button>
			</MenuItem>
		</ContextMenu>
	</Fragment>
)

DictionaryInputComponent.propTypes = {
	openFromDictionaryDialog: PropTypes.func.isRequired,
}

export default DictionaryInputComponent
