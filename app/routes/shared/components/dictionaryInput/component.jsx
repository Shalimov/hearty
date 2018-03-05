import React from 'react'
import PropTypes from 'prop-types'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'
import { Button, ValidatedInput } from 'shared/components'
import t from 'i18n'

const { Fragment } = React

const DictionaryInputComponent = ({ openFromDictionaryDialog, ...params }) => {
	const id = `dictionary-context-${params.field.id}`
	
	return (
		<Fragment>
			<ContextMenuTrigger id={id}>
				<ValidatedInput {...params} />
			</ContextMenuTrigger>
			<ContextMenu id={id}>
				<MenuItem>
					<Button iconed onClick={openFromDictionaryDialog}>
						{t('descriptions.fromDictionary')}
					</Button>
				</MenuItem>
			</ContextMenu>
		</Fragment>
	)
}

DictionaryInputComponent.propTypes = {
	openFromDictionaryDialog: PropTypes.func.isRequired,
}

export default DictionaryInputComponent
