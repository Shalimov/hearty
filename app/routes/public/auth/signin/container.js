import { compose, withHandlers } from 'recompose'
// import { toast } from 'react-toastify'
import { graphql } from 'react-apollo'
import qql from 'graphql-tag'
import { inject } from 'mobx-react'
// import { board } from 'routes/route.map'

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
	withHandlers({
		onSubmit: ({ createTokenMutation }) => async () => {
			try{
				const result = await createTokenMutation({ variables: { email: 'hello', password: 'world' }})
			} catch(err) {
			}
		},
	}),
)(SignInComponent)
