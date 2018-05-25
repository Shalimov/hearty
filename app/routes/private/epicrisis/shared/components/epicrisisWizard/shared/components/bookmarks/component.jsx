import fp from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Button } from 'shared/components'
import { css, cssx } from 'utils/aphrodite-ext'
import t from 'i18n'

import styles from './styles'

const cx = cssx.bindWith(styles)

const BookmarksComponent = ({
	isExpanded,
	isOver,
	connectDropTarget,
	bookmarks,
	onToggle,
	onRemove,
}) => {
	const expanded = (isExpanded || isOver)
	const collapsed = !expanded

	return connectDropTarget(
		<div className={css(styles.container)}>
			<Button iconed onClick={onToggle}>
				<div className={css(styles.iconWrapper)}>
					<FontAwesome name="bookmark" />
				</div>
			</Button>
			<div className={cx({ bookmarksContainer: true, collapsed, expanded })}>
				<div className={css(styles.bookmarkListWrapper)}>
					<h4 className={css(styles.bookmarksHeader)}>
						{t('headers.bookmarks')}
					</h4>
					{
						fp.isEmpty(bookmarks) ? (
							<p className={css(styles.bookmarkPlaceholder)}>
								{t('hints.dragAndDropBookmark')}
							</p>
						) : (
							<ul className={css(styles.bookmarkList)}>
								{
									fp.map(bookmark => (
										<li key={bookmark} className={css(styles.bookmarkItem)}>
											<span>{bookmark}</span>
											<Button iconed onClick={onRemove(bookmark)}>
												<FontAwesome name="times" />
											</Button>
										</li>
									), bookmarks)
								}
							</ul>
						)
					}

				</div>
			</div>
		</div>
	)
}

BookmarksComponent.propTypes = {
	isExpanded: PropTypes.bool.isRequired,
	isOver: PropTypes.bool.isRequired,
	bookmarks: PropTypes.arrayOf(PropTypes.string),
	connectDropTarget: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
}

export default BookmarksComponent
