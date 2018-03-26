import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import t from 'i18n'

import styles from './styles'

// eslint-disable-next-line
const createShortcutModuleEditableTable = ({ moduleName, actions }, index) => (
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
		</thead>
		<tbody>
			{
				actions.map(({ binding, command }, index) => (
					<tr key={`${moduleName}-${binding}-${index}`}>
						<td className={css(styles.cell)}>
							{binding}
						</td>
						<td className={css(styles.cell)}>
							{t(`descriptions.shortcuts.commands.${moduleName}.${command}`)}
						</td>
						<td className={css(styles.cell)}>
						</td>
					</tr>
				))
			}
		</tbody>
	</table>
)

const ShortcutsComponent = ({ shorcutsSections }) => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.shortcuts.index')}</h2>
		{
			shorcutsSections.map(createShortcutModuleEditableTable)
		}
	</div>
)

ShortcutsComponent.propTypes = {
	shorcutsSections: PropTypes.arrayOf(PropTypes.shape()),
}

export default ShortcutsComponent
