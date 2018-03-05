import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'

import TemplatesFinderComponent from './component'

export default compose(
	graphql(gql`
		query RetrieveEpicrisisTemplate {
			epicrisisTemplates
		}
	`)
)(TemplatesFinderComponent)
