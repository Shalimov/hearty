import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import t from 'i18n'
import FontAwesome from 'react-fontawesome'
import { Button } from 'shared/components'

import ShortcutEditorDialog from './components/shortcutEditorDialog'
import styles from './styles'

const ShortcutsComponent = ({
	shorcutsSections,
	isEditorOpen,
	editorParams,
	onAddHotkey,
	onEditHotkey,
	onSaveHotkey,
	onRemoveHotkey,
	onRequestClose,
}) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.shortcuts.index')}</h2>
		{
			shorcutsSections.map(({ moduleName, actions }, index) => (
				<table key={`${moduleName}-${index}`} className={css(styles.table)}>
					<caption className={css(styles.caption)}>
						{t(`tables.captions.shortcuts.${moduleName}`)}
					</caption>
					<thead>
						<tr>
							<th className={css(styles.cell, styles.headerCell)}>
								{t('headers.shortcuts.key')}
							</th>
							<th className={css(styles.cell, styles.headerCell)}>
								{t('headers.shortcuts.command')}
							</th>
							<th className={css(styles.cell, styles.headerCell)}>
								{t('headers.shortcuts.extra')}
							</th>
						</tr>
						<tr>
							<td className={css(styles.cell, styles.noPadding, styles.centrized)} colSpan={3}>
								<Button iconed fullbox>
									<span className={css(styles.addButtonContent)} onClick={onAddHotkey(moduleName)}>
										{t('buttons.add')}&nbsp;<FontAwesome name="plus" />
									</span>
								</Button>
							</td>
						</tr>
					</thead>
					<tbody>
						{
							actions.map((action, index) => {
								const value = fp.get('params.value', action)
								const truncatedValue = fp.truncate({}, value)

								return (
									<tr key={`${moduleName}-${action.combination}-${index}`}>
										<td className={css(styles.cell)}>
											{action.combination}
										</td>
										<td className={css(styles.cell)} title={value}>
											{t(`descriptions.shortcuts.commands.${moduleName}.${action.command}`)}
											{value && <strong>: &quot;{truncatedValue}&quot;</strong>}
										</td>
										<td className={css(styles.cell, styles.centrized)}>
											<div className={css(styles.buttonCellBox)}>
												<Button
													iconed
													title={t('hints.clickToEdit')}
													onClick={onEditHotkey(moduleName, action)}>
													<FontAwesome name="pencil" />
												</Button>
											</div>
											<div className={css(styles.buttonCellBox)}>
												<Button 
													iconed
													title={t('hints.clickToRemove')}
													onClick={onRemoveHotkey(moduleName, action)}>
													<FontAwesome name="trash" />
												</Button>
											</div>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			))
		}
		<ShortcutEditorDialog
			isOpen={isEditorOpen}
			editorParams={editorParams}
			onSubmit={onSaveHotkey}
			onRequestClose={onRequestClose} />
	</div>
)

ShortcutsComponent.propTypes = {
	editorParams: PropTypes.shape(),
	shorcutsSections: PropTypes.arrayOf(PropTypes.shape()),
	isEditorOpen: PropTypes.bool.isRequired,
	onAddHotkey: PropTypes.func.isRequired,
	onEditHotkey: PropTypes.func.isRequired,
	onRemoveHotkey: PropTypes.func.isRequired,
	onSaveHotkey: PropTypes.func.isRequired,
	onRequestClose: PropTypes.func.isRequired,
}

export default ShortcutsComponent
