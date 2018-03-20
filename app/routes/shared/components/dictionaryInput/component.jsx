import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu'
import { ValidatedInput } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const { Fragment } = React

const DictionaryInputComponent = ({
	openFromDictionaryDialog,
	openStoreInDictionaryDialog,
	...params
}) => {
	const id = `dictionary-context-${params.field.id}`

	return (
		<Fragment>
			<ContextMenuTrigger id={id}>
				<ValidatedInput {...params} />
			</ContextMenuTrigger>
			<ContextMenu id={id}>
				<MenuItem onClick={openFromDictionaryDialog}>
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
	openFromDictionaryDialog: PropTypes.func.isRequired,
	openStoreInDictionaryDialog: PropTypes.func.isRequired,
}

export default DictionaryInputComponent
