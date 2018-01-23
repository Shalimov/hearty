import React from 'react'
import { css } from 'aphrodite'
import { Image } from 'shared/components'
import t from 'i18n'

import styles from './styles'
// import HelpSection from './components/helpSection'

const WelcomeComponent = () => (
	<div className={css(styles.container)}>
		<h2 className={css(styles.header)}>{t('headers.welcome')}</h2>
		<h3 className={css(styles.description)}>{t('descriptions.welcome')}</h3>
		<div className={css(styles.row)}>
			<div className={css(styles.apiPicBox)}>
				<Image name="asset-light" />
				<span className={css(styles.apiPicBoxV)}>v</span>
				<span className={css(styles.apiPicBoxNum)}>1.0</span>
			</div>
			<div className={css(styles.apiDescription)}>
				<p>{t('descriptions.welcomeFeatures')}</p>
			</div>
		</div>
		<hr className={css(styles.divider, styles.nthRow)} />
	</div>
)

export default WelcomeComponent
