import fp from 'lodash/fp'
import { compose, withStateHandlers, withHandlers, defaultProps, lifecycle } from 'recompose'

import FinderComponent from './component'

export default compose(
	defaultProps({
		maxTermsShow: 6,
		maxSubtermsShow: 6,
	}),
	withStateHandlers(({ maxTermsShow, maxSubtermsShow }) => ({
		isInitialized: false,
		maxTermsShow,
		maxSubtermsShow,
		activeTerms: [],
		activeSubterms: [],
		activeItem: null,
		searchValue: '',
	}), {
		setActiveTerms: ({ maxTermsShow }) => fp.flow(
			fp.take(maxTermsShow),
			activeTerms => ({ activeTerms, isInitialized: true })
		),
		setActiveSubterms: ({ maxSubtermsShow }) => fp.flow(
			fp.take(maxSubtermsShow),
			activeSubterms => ({ activeSubterms }),
		),
		setActiveItem: () => activeItem => ({ activeItem }),
		setSearchValue: () => searchValue => ({ searchValue }),
	}),
	withHandlers({
		onSearchHelper: ({
			onTermSearch,
			onSubtermSearch,
			setActiveSubterms,
			setSearchValue,
			setActiveTerms,
		}) => (searchValue = '', activeItem) => {
			const isSubtermSearch = Boolean(activeItem)

			setSearchValue(searchValue)

			if (isSubtermSearch && onSubtermSearch) {
				onSubtermSearch(searchValue, activeItem, setActiveSubterms)
			} else if (onTermSearch) {
				onTermSearch(searchValue, setActiveTerms)
			}
		},
	}),
	withHandlers({
		onInternalSearch: ({ onSearchHelper, activeItem }) => (event) => {
			onSearchHelper(event.target.value, activeItem)
		},

		onSetActiveItem: ({ setActiveItem, onSearchHelper }) => item => () => {

			setActiveItem(item)
			onSearchHelper(undefined, item)
		},

		onBack: ({ setActiveItem, onSearchHelper }) => () => {
			setActiveItem(null)
			onSearchHelper(undefined, null)
		},

		onInternalSelect: ({ onSelect }) => item => () => {
			onSelect(item)
		},
	}),
	lifecycle({
		componentDidMount() {
			const { onSearchHelper, activeItem } = this.props

			onSearchHelper(undefined, activeItem)
		},
	})
)(FinderComponent)
