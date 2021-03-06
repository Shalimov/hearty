import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { Button } from 'shared/components'
import FontAwesome from 'react-fontawesome'
import { epicrisis } from 'routes/route.map'
import { TemplateFinderModal } from 'routes/shared/components'
import t from 'i18n'

import styles from './styles'

const LeftControlsComponent = ({ value, onInternalPrint }) => (
	<div className={css(styles.controls)}>
		<Link
			title={t('hints.clickToEdit')}
			className={css(styles.link)}
			to={epicrisis.edit(value._id)}>
			<Button iconed>
				<FontAwesome name="pencil-square-o"
					className={css(styles.icon)} />
			</Button>
		</Link>
		<TemplateFinderModal onSubmit={onInternalPrint}>
			{
				onTrigger => (
					<Button
						disabled={!fp.get('patient.departureAt', value)}
						title={t('hints.clickToPrint')}
						iconed
						onClick={onTrigger}>
						<FontAwesome name="print"
							className={css(styles.link, styles.icon)} />
					</Button>
				)
			}
		</TemplateFinderModal>
	</div>
)

LeftControlsComponent.propTypes = {
	value: PropTypes.shape().isRequired,
	onInternalPrint: PropTypes.func.isRequired,
}

export default LeftControlsComponent
