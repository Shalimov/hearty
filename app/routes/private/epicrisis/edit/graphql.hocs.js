import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const queryHoc = graphql(gql`
	query RetrieveEpicrisisQuery($_id: ID!) {
		epicrisis(_id: $_id) {
			_id
			epicrisisNo
			patient {
				fullname
				birthdate
				region
				address
				jobInfo
				arrivalAt
				departureAt
			}
			diagnosis {
				main
				complication
				followingPart
			}
			ecgEcho {
				arrival
				dynamic
				ks
				other
			}
			usdScopia {
				obp
				bca
				fgds
				bronchoscopy
				other
			}
			xray {
				crgogk
				crgSkull
				jointsRoentgenography
				other
			}
			ct {
				head
				ogk
				obp
				other
			}
			examination {
				ophthalmologist
				entDoctor
				urological
				physiotherapist
				psychiatric
				surgeon
				oncologist
				midwife
				other
			}
			medicineRecommendations {
				medicine
				recommendation
			}
			treatment {
				description
			}
			analyses {
				name
				description
			}
			recommended
			summary
		}
	}
`, {
	options: ({ match }) => ({
		variables: {
			_id: match.params.epicrisisId,
		},
	}),
})

const mutationHoc = graphql(gql`
	mutation UpdateEpicrisisMutation($input: EpicrisisInput!) {
		updateEpicrisis(input: $input) {
			_id
		}
	}
`, {
	name: 'updateEpicrisisMutation',
})


export { queryHoc, mutationHoc }
