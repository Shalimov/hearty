import fp from 'lodash/fp'
import { compose, withHandlers } from 'recompose'
import { toast } from 'react-toastify'
import { inject } from 'mobx-react'
import { graphql } from 'react-apollo'
import qql from 'graphql-tag'
import log from 'utils/logger'
import { board } from 'routes/route.map'

import SignInComponent from './component'

export default compose(
	inject('applicationStateStore'),
	graphql(qql`
		query {
			me {
				_id
				email
			}
		}
	`),
	graphql(qql`
		mutation Mutation($input: CredentialsInput){
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
		onSubmit: ({ history, createTokenMutation, applicationStateStore }) => async (formData) => {
			try {
				const { email, password } = formData
				const { data } = await createTokenMutation({
					variables: {
						input: { email, password },
					},
				})

				const { token, me: user } = data.createToken
				applicationStateStore.signin(token, user)
				history.push(board.index())
			} catch (err) {
				const message = fp.get('networkError.0.message', err)
				toast.error(message)
				log.error(err)
			}
		},
	}),
)(SignInComponent)
