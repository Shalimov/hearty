import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { analysis } from 'routes/route.map'
import {
	Form,
	Button,
	EmptyArea,
	SubmitButton,
	ContentLoader,
	ValidatedInput,
} from 'shared/components'
import t from 'i18n'

import styles from './styles'

const splitAnalysesInto = fp.flow(
	fp.partition('basic'),
	([basic, other]) => {
		const result = []

		if (!fp.isEmpty(basic)) {
			result.push([basic, t('headers.basic')])
		}

		if (!fp.isEmpty(other)) {
			result.push([other, t('headers.additional')])
		}

		return result
	},
)

const AnalysesSelectionComponent = ({
	data: { analyses = {}, loading },
	formModel,
	onSubmit,
	onCancel,
}) => {
	const hasNoAnalyses = fp.isEmpty(formModel.fields)
	const analysesInfo = splitAnalysesInto(analyses.content)

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
			{
				hasNoAnalyses ? (
					<EmptyArea>
						{t('errors.noAnalyses')}&nbsp;
						<Link
							to={analysis.index()}
							className={css(styles.link)}>
							{t('links.follow')}
						</Link>
					</EmptyArea>
				) : (
					<Form>
						<fieldset>
							<legend className={css(styles.formLegend)}>{t('legends.analysesSelection')}</legend>
							<div className={css(styles.tablesGrid)}>
								{
									fp.map(([collection, caption]) => (
										<table key={caption} className={css(styles.table)}>
											<caption className={css(styles.caption)}>{caption}</caption>
											<tbody>
												{generateAnalyses(collection)}
											</tbody>
										</table>
									), analysesInfo)
								}
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
									onSubmit={onSubmit}>
									{t('buttons.next')}
								</SubmitButton>
							</div>
						</fieldset>
					</Form>
				)
			}
		</ContentLoader>
	)
}

AnalysesSelectionComponent.propTypes = {
	data: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default AnalysesSelectionComponent
