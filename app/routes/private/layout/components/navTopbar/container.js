import { withRouter } from 'react-router-dom'
import { compose, mapProps, withHandlers } from 'recompose'
import { inject } from 'mobx-react'

import NavTopbar from './component'

export default compose(
	inject('applicationStateStore'),
	withRouter,
	mapProps(({ applicationStateStore }) => ({
		user: applicationStateStore.loggedUser || {},
		menuItems: [
			{
				icon: 'times-circle-o',
				title: 'Logout',
				onClick() {
					applicationStateStore.signout()
				},
			},
		],
	})),
	withHandlers({
		onItemClick: ({ user }) => (item) => {
			if (item.onClick) {
				item.onClick(user)
			}
		},
	}),
)(NavTopbar)
