import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { medicine } from 'routes/route.map'
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

const rejectEmpty = fp.reject(fp.flow(fp.get('listOfMedicaments'), fp.isEmpty))

// TODO: Refactoring
const MedicineSelectionComponent = ({
	legend,
	data: { medicineGroups = {}, loading },
	formModel,
	onInternalSubmit,
	onCancel,
}) => (
	fp.isEmpty(medicineGroups.content) ? (
		<EmptyArea>
			{t('errors.noMedicine')}&nbsp;
			<Link
				to={medicine.index()}
				className={css(styles.link)}>
				{t('links.follow')}
			</Link>
		</EmptyArea>
	) : (
		<ContentLoader isLoading={loading}>
			<Form>
				<fieldset>
					<legend className={css(styles.formLegend)}>{legend}</legend>
					<div className={css(styles.tablesList)}>
						{
							fp.map(group => (
								<table key={group._id} className={css(styles.table)}>
									<caption className={css(styles.caption)}>{group.groupName}</caption>
									<tbody>
										{
											fp.map(({ name }) => (
												<tr key={`${group._id}-${name}`}>
													<th className={css(styles.cell)}>
														{name}
													</th>
													<td className={css(styles.cell)}>
														<ValidatedInput
															key={`${group._id}-${name}`}
															type="toggle"
															field={formModel.fields[name]}
															label={null}
														/>
													</td>
												</tr>
											), group.listOfMedicaments)
										}
									</tbody>
								</table>
							), rejectEmpty(medicineGroups.content))
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
							onSubmit={onInternalSubmit}>
							{t('buttons.next')}
						</SubmitButton>
					</div>
				</fieldset>
			</Form>
		</ContentLoader>
	)
)

MedicineSelectionComponent.propTypes = {
	legend: PropTypes.string.isRequired,
	data: PropTypes.shape().isRequired,
	formModel: PropTypes.shape().isRequired,
	onInternalSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
}

export default MedicineSelectionComponent
