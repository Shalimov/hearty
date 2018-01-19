import { compose, mapProps } from 'recompose'
import { inject } from 'mobx-react'

import WelcomeComponent from './component'

export default compose(
	inject('applicationStateStore'),
	mapProps(({ applicationStateStore }) => {
		const user = applicationStateStore.loggedUser || {}		
		return {
			username: user.username,
		}
	}),
)(WelcomeComponent)
