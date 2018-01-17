import { compose, withHandlers } from 'recompose'
// import { toast } from 'react-toastify'
import { graphql } from 'react-apollo'
import qql from 'graphql-tag'
import { inject } from 'mobx-react'
import log from 'utils/logger'
// import { board } from 'routes/route.map'

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
			}
		}
	`, { name: 'createTokenMutation' }),
	withHandlers({
		onSubmit: ({ createTokenMutation }) => async () => {
			try {
				const token = await createTokenMutation({
					variables: {
						input: {
							email: 'work.igor.shalimov@gmail.com',
							password: '!QAZ2wsx',
						},
					},
				})

				log.info(token)
			} catch (err) {
				log.error(err)
			}
		},
	}),
)(SignInComponent)
