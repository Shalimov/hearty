import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'
import { ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const { Fragment } = React

const DictionaryInputComponent = ({
	openPasteFromDictionaryDialog,
	openStoreInDictionaryDialog,
	...params
}) => {
	const id = `dictionary-context-${params.field.id}`
	
	// Set smartTab mode by default for textarea types
	return (
		<Fragment>
			<ContextMenuTrigger id={id}>
				<ValidatedInput {...params} />
			</ContextMenuTrigger>
			<ContextMenu id={id}>
				<MenuItem onClick={openPasteFromDictionaryDialog}>
					<span className={css(styles.text)}>
						{t('contextMenu.pasteFromDictionary')}
					</span>
				</MenuItem>
				<MenuItem onClick={openStoreInDictionaryDialog}>
					<span className={css(styles.text)}>
						{t('contextMenu.storeInDictionary')}
					</span>
				</MenuItem>
			</ContextMenu>
		</Fragment>
	)
}

DictionaryInputComponent.propTypes = {
	openPasteFromDictionaryDialog: PropTypes.func.isRequired,
	openStoreInDictionaryDialog: PropTypes.func.isRequired,
}

export default DictionaryInputComponent
