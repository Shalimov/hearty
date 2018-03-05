import gql from 'graphql-tag'
import fp from 'lodash/fp'
import { graphql } from 'react-apollo'
import { compose, withProps, withHandlers } from 'recompose'
import { tryAsync } from 'utils/try'
import { toast } from 'react-toastify'
import t from 'i18n'

import EpicrisisWizardComponent from './component'

import PatientInfo from './components/patientInto'
import DiagnosisInfo from './components/diagnosisInfo'
import TemplatesFinder from './components/templatesFinder'

export default compose(
	withProps({
		items: [
			PatientInfo,
			DiagnosisInfo,
			TemplatesFinder,
		],
	}),
	graphql(gql`
		mutation CreateEpicrisis($input: EpicrisisInput!) {
			createEpicrisis(input: $input) {
				_id
			}
		}
	`, { name: 'createEpicrisis' }),
	graphql(gql`
		mutation PrintDocTemplate($_id: ID!, $epicrisisTemplate: String!) {
			printEpicrisis(_id: $_id, epicrisisTemplate: $epicrisisTemplate)
		}
	`, { name: 'printEpicrisis' }),
	withHandlers({
		onSubmit: ({ printEpicrisis, createEpicrisis }) =>
			tryAsync(async (wizardData) => {
				const epicrisisData = fp.omit(['template'], wizardData)

				const { data } = await createEpicrisis({
					variables: { input: epicrisisData },
				})

				await printEpicrisis({
					variables: {
						_id: data.createEpicrisis._id,
						epicrisisTemplate: wizardData.template.name,
					},
				})

				toast.success(t('common.operationCompleted'))
			}),
	})
)(EpicrisisWizardComponent)
