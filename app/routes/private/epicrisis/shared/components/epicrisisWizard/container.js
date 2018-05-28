import fp from 'lodash/fp'
import {
	compose,
	withProps,
	withHandlers,
	withState,
	lifecycle,
} from 'recompose'
import { omitRecoursive } from 'utils/omit.recoursive'
import t from 'i18n'

import EpicrisisWizardComponent from './component'
import wizardItems from './wizard.items'

let containerRef = null

export default compose(
	withState('bookmarks', 'setBookmarks', fp.get('initialValues.bookmarks')),
	withProps({ items: wizardItems }),
	withHandlers({
		onMessage: () => (location) => {
			const skipConfirm = fp.get('skipConfirm', location.state)

			if (!skipConfirm) {
				return t('toasts.forms.preventTransition')
			}

			return skipConfirm
		},

		onContainerRef: () => (ref) => {
			containerRef = ref
		},

		onStepChanged: () => () => {
			fp.invoke('scrollIntoView', containerRef)
		},

		onInternalSubmit: ({ onSubmit, initialValues, bookmarks }) => (wizardData, options) => {
			const combinedData = fp.mergeAll([initialValues, wizardData, { bookmarks }])
			const cleanEpicrisisData = omitRecoursive([
				'selectedMedicineFields',
				'selectedAnalyses',
				'__typename',
			], combinedData)

			return onSubmit(cleanEpicrisisData, options)
		},

		onBookmarksChange: ({ setBookmarks }) => (bookmarks) => {
			setBookmarks(bookmarks)
		},
	}),
	lifecycle({
		componentWillMount() {
			containerRef = null
		},
	})
)(EpicrisisWizardComponent)
