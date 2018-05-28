import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Button, ValidatedInput } from 'shared/components'
import { css, cssx } from 'utils/aphrodite-ext'
import t from 'i18n'

import styles from './styles'

const cx = cssx.bindWith(styles)

const BookmarksComponent = ({
	isExpanded,
	isOver,
	connectDropTarget,
	bookmarksField,
	onToggle,
}) => {
	const expanded = (isExpanded || isOver)
	const collapsed = !expanded

	return connectDropTarget(
		<div className={css(styles.container)}>
			<Button iconed onClick={onToggle} className={css(styles.toggle)}>
				<div className={css(styles.iconWrapper)}>
					<FontAwesome name="bookmark" />
				</div>
			</Button>
			<div className={cx({ bookmarksContainer: true, collapsed, expanded })}>
				<div className={css(styles.bookmarkAreaWrapper)}>
					<h4 className={css(styles.bookmarksHeader)}>
						{t('headers.bookmarks')}
					</h4>
					<ValidatedInput
						label={null}
						flexible
						type="textarea"
						placeholder={t('hints.dragAndDropBookmark')}
						field={bookmarksField}
						inputStyle={{ border: 'none' }}
						inputContainerStyle={{ height: '100%'}}
						containerStyle={{ height: 'inherit' }} />
				</div>
			</div>
		</div>
	)
}

BookmarksComponent.propTypes = {
	isExpanded: PropTypes.bool.isRequired,
	isOver: PropTypes.bool.isRequired,
	bookmarksField: PropTypes.shape().isRequired,
	connectDropTarget: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
}

export default BookmarksComponent
