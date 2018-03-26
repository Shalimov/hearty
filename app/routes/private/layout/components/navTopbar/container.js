import { withRouter } from 'react-router-dom'
import { compose, withProps, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import t from 'i18n'
import { settings } from 'routes/route.map'

import NavTopbar from './component'

export default compose(
	inject('applicationStateStore'),
	withRouter,
	withProps(({ applicationStateStore, history }) => ({
		user: applicationStateStore.loggedUser || {},
		menuItems: [
			{
				icon: 'chevron-right',
				title: t('buttons.settings'),
				onClick() {
					history.push(settings.shortcuts())
				},
			},
			{
				icon: 'times-circle-o',
				title: t('buttons.logout'),
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
