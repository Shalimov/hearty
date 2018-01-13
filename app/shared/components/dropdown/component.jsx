import fpWithCap from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import { cssx, css } from 'utils/aphrodite-ext'

import styles from './styles'

const fp = fpWithCap.convert({ cap: false })

const Separator = () => (<li className={css(styles.dropdownSeparator)}></li>)

const DropdownComponent = ({
	isOpen,
	onToggleOpen,
	onInternalClick,
	renderHeader,
	renderItem,
	items,
}) => (
	<div className={css(styles.dropdown)}>
		<button onClick={onToggleOpen}
			className={cssx({
				dropdownHeader: true,
				dropdownHeaderActive: isOpen,
			}, styles)}>
			{renderHeader(isOpen, items)}
		</button>
		{
			isOpen && (
				<ul className={css(styles.dropdownList)}>
					{fp.map((item, i) => (
						item === Separator ? 
							<Separator key={`drop_down_item_sep_${i}`} /> : 
							(<li key={`drop_down_item_${i}`}
								onClick={onInternalClick(item)}
								className={css(styles.dropdownItem)}>
								{renderItem(item)}
							</li>)
					), items)}
				</ul>
			)
		}
	</div>
)

DropdownComponent.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onInternalClick: PropTypes.func.isRequired,
	onToggleOpen: PropTypes.func.isRequired,
	renderHeader: PropTypes.func.isRequired,
	renderItem: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.shape(), PropTypes.func])
	).isRequired,
}

DropdownComponent.Separator = Separator

export default DropdownComponent
