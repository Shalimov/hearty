import { withRouter } from 'react-router-dom'
import { compose, withProps, withHandlers } from 'recompose'
import { inject } from 'mobx-react'
import t from 'i18n'

import NavTopbar from './component'

export default compose(
	inject('applicationStateStore'),
	withRouter,
	withProps(({ applicationStateStore }) => ({
		user: applicationStateStore.loggedUser || {},
		menuItems: [
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
