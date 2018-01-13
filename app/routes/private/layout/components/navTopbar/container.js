import { withRouter } from 'react-router-dom'
import { compose, mapProps, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import { Dropdown } from 'shared/components'
import { tenantUsers } from 'routes/route.map'

import NavTopbar from './component'

export default compose(
	inject('applicationStateStore'),
	withRouter,
	mapProps(({ applicationStateStore, history }) => ({
		user: applicationStateStore.loggedUser || {},
		menuItems: [
			{
				icon: 'chevron-right',
				title: 'User details',
				onClick(user) {
					history.push(tenantUsers.edit(user.tenantId, user.id))
				},
			},
			Dropdown.Separator,
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
