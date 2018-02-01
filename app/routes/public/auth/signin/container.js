import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { tryAsync } from 'utils/try'
import { board } from 'routes/route.map'

import SignInComponent from './component'

export default compose(
	inject('applicationStateStore'),
	graphql(gql`
		mutation CreateTokenMutaion($input: CredentialsInput) {
			createToken(input: $input) {
				token
				me {
					_id
					email
					username
				}
			}
		}
	`, { name: 'createTokenMutation' }),
	withHandlers({
		onSubmit: ({ history, createTokenMutation, applicationStateStore }) =>
			tryAsync(async (formData) => {
				const { email, password } = formData
				const { data } = await createTokenMutation({
					variables: {
						input: { email, password },
					},
				})

				const { token, me: user } = data.createToken
				applicationStateStore.signin(token, user)
				history.push(board.index())
			}, fp.get('networkError.0.message')),
	}),
)(SignInComponent)
