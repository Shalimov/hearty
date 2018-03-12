import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import {
	ContentLoader,
	Form,
	ValidatedInput,
	Button,
	SubmitButton,
} from 'shared/components'
import t from 'i18n'

import styles from './styles'

const splitAnalysesInto = fp.partition('basic')

const AnalysesSelectionComponent = ({
	data: { analyses = {}, loading },
	formModel,
	onInternalSubmit,
	onCancel,
}) => {
	const [basicAnalyses, otherAnalyses] = splitAnalysesInto(analyses.content)

	const generateAnalyses = fp.map(analysis => (
		<tr key={analysis._id}>
			<th className={css(styles.cell)}>
				{analysis.name}
			</th>
			<td className={css(styles.cell)}>
				<ValidatedInput
					type="counter"
					min={0}
					max={5}
					label={null}
					field={formModel.fields[analysis.name]} />
			</td>
		</tr>
	))

	return (
		<ContentLoader isLoading={loading}>
			<Form>
				<fieldset>
					<legend className={css(styles.formLegend)}>{t('legends.analysesSelection')}</legend>
					<div className={css(styles.tablesGrid)}>
						<table className={css(styles.table)}>
							<caption className={css(styles.caption)}>{t('headers.basic')}</caption>
							<tbody>
								{generateAnalyses(basicAnalyses)}
							</tbody>
						</table>
						<table className={css(styles.table)}>
							<caption className={css(styles.caption)}>{t('headers.additional')}</caption>
							<tbody>
								{generateAnalyses(otherAnalyses)}
							</tbody>
						</table>
					</div>
					<div className={css(styles.buttonGroup)}>
						<div className={css(styles.buttonWrapper)}>
							<Button
								rounded
								outlined
								onClick={onCancel}>
								{t('buttons.back')}
							</Button>
						</div>
						<SubmitButton
							rounded
							form={formModel}
							onSubmit={onInternalSubmit}>
							{t('buttons.next')}
						</SubmitButton>
					</div>
				</fieldset>
			</Form>
		</ContentLoader>
	)
}

AnalysesSelectionComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AnalysesSelectionComponent
