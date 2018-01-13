import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
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

export const renderIfNotAuthenticated = (Component) =>
	withStore(observer(({ applicationStateStore, ...props }) => (
		!applicationStateStore.isSignedIn ? (
			<Component {...props} />
		) : (
			<Redirect to={board.index()} />
		)
	)))
