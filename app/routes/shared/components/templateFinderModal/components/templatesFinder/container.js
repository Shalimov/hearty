import fp from 'lodash/fp'
import gql from 'graphql-tag'
import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { withFormModel } from 'shared/hocs'
import Ego from 'utils/validation'
import t from 'i18n'

import TemplatesFinderComponent from './component'

export default compose(
	graphql(gql`
		query RetrieveEpicrisisTemplate {
			epicrisisTemplates
		}
	`),
	withFormModel({
		choosenTemplateField: Ego.string()
			.forProp(fp.get('value'))
			.label(t('labels.docTemplate'))
			.required(),
	}, { spreadFields: true }),
	withHandlers({
		onInternalSubmit: ({ formModel, onSubmit }) => () => {
			const { choosenTemplateField } = formModel.value
			return onSubmit({ templateName: choosenTemplateField })
		},
	})
)(TemplatesFinderComponent)
