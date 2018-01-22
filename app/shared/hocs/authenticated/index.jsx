import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import { ContentLoader } from 'shared/components'
import { auth, board } from 'routes/route.map'

const withStore = inject('applicationStateStore')

export const renderIfAuthenticated = (Component) =>
	withStore(observer(({ applicationStateStore, ...props }) => (
		applicationStateStore.isSignedIn ? (
			<Component {...props} />
		) : (
			<Redirect to={auth.signin()} />
		)
	)))

export const renderIfNotAuthenticated = compose(
	graphql(gql`
		query {
			me {
				_id
				email
				username
			}
		}
	`),
	withStore,
	lifecycle({
		componentWillReceiveProps(nextProps) {
			const { applicationStateStore } = this.props
			const { loading, me } = nextProps.data

			if (!loading && me) {
				const token = applicationStateStore.authToken
				applicationStateStore.signin(token, me)
			}
		},
	}),
	observer,
	Component => {
		// eslint-disable-next-line
		const renderIfNotAuthenticatedWrapper = ({ applicationStateStore, data, ...props }) => (
			!applicationStateStore.isSignedIn ? (
				<ContentLoader isLoading={data.loading} fixed><Component {...props} /></ContentLoader>
			) : (
				<Redirect to={board.index()} />
			)
		)

		return renderIfNotAuthenticatedWrapper
	}
)
