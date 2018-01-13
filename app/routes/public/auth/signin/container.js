import { compose, withHandlers } from 'recompose'
import { toast } from 'react-toastify'
import { graphql } from 'react-apollo'
import qql from 'graphql-tag'
import { inject } from 'mobx-react'
import { board } from 'routes/route.map'

import SignInComponent from './component'

export default compose(
	inject('applicationStateStore'),
	graphql(qql`
		query {
			me {
				id
				email
			}
		}
	`),
	graphql(qql`
		mutation AuthMutation($email: String!, $password: String!) {
			createToken(email: $email, password: $password) {
				token
			}
		}
	`, { name: 'createTokenMutation' }),
	withHandlers({
		onSubmit: ({ createTokenMutation }) => async () => {
			try{
				const result = await createTokenMutation({ variables: { email: 'hello', password: 'world' }})
				console.log(result)
			} catch(err) {
				console.error(err)
			}
		},
	}),
)(SignInComponent)
