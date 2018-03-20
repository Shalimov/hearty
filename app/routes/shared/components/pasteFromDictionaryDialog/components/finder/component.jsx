import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css, cssx } from 'utils/aphrodite-ext'
import FontAwesome from 'react-fontawesome'
import { Input, ContentLoader } from 'shared/components'
import t from 'i18n'

import styles from './styles'

const truncate = fp.truncate({ length: 90 })
const getTags = fp.flow(
	fp.prop('tags'),
	fp.join(' ')
)

const EmptyBlock = () => (
	<div className={css(styles.emptyBlock)}>{t('tables.notFound')}</div>
)

const FinderComponent = ({
	activeItem,
	activeTerms,
	activeSubterms,
	searchValue,
	isInitialized,
	onInternalSearch,
	onSetActiveItem,
	onInternalSelect,
	onBack,
}) => (
	<div className={css(styles.container)}>
		<Input
			value={searchValue}
			flexible
			placeholder={
				activeItem ?
					t('placeholders.dictionaries.searchSubterm') :
					t('placeholders.dictionaries.searchTerm')
			}
			onChange={onInternalSearch} />
		<div className={
			cssx({
				menuWrapper: true,
				isActive: Boolean(activeItem),
			}, styles)
		}>
			<ContentLoader isLoading={!isInitialized} className={css(styles.loaderLimits)}>
				{
					(fp.isEmpty(activeTerms) && isInitialized) ? (
						<EmptyBlock />
					) : (
						<menu className={css(styles.menu)}>
							{
								fp.map((item, index) => (
									<li key={`${item.term}_${index}`}
										onClick={onSetActiveItem(item)}
										className={css(styles.menuItem, styles.mainMenuItem)}>
										<span>{item.term}</span>
										<FontAwesome name="chevron-right" />
									</li>
								), activeTerms)
							}
						</menu>
					)
				}
				<div className={css(styles.submenuWrapper)}>
					<button type="button"
						onClick={onBack}
						className={css(styles.backButton)}>
						<FontAwesome name="chevron-left" />
					</button>
					{
						(fp.isEmpty(activeSubterms) && isInitialized) ? (
							<EmptyBlock />
						) : (
							<ul className={
								cssx({
									previewList: true,
									previewListInactive: !activeItem,
								}, styles)
							}>
								{
									activeItem && fp.map((item, index) => (
										<li key={`${item.term}_${index}`}
											title={getTags(item)}
											onClick={onInternalSelect(item)}
											className={css(styles.menuItem, styles.submenuItem)}>
											{truncate(item.term)}
										</li>
									), activeSubterms)
								}
							</ul>
						)
					}
				</div>
			</ContentLoader>
		</div>
	</div>
)

FinderComponent.propTypes = {
	activeTerms: PropTypes.arrayOf(PropTypes.shape()),
	activeSubterms: PropTypes.arrayOf(PropTypes.shape()),
	searchValue: PropTypes.string,
	isInitialized: PropTypes.bool,
	loading: PropTypes.bool,
	activeItem: PropTypes.shape(),
	onInternalSearch: PropTypes.func.isRequired,
	onSetActiveItem: PropTypes.func.isRequired,
	onInternalSelect: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired,
}

export default FinderComponent
