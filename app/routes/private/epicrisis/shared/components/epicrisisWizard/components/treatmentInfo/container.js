import fp from 'lodash/fp'
import { compose, withProps } from 'recompose'

import TreatmentInfoComponent from './component'

export default compose(
	withProps(({ initialValues }) => ({
		storeKey: 'treatment',
		postTransform: fp.map(({ value }) => ({ description: value })),
		extractSelectedFields: () => {
			const { treatment } = initialValues
			return fp.map('description', treatment)
		},
	}))
)(TreatmentInfoComponent)
