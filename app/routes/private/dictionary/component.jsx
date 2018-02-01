import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import ReactTable from 'react-table'
import FontAwesome from 'react-fontawesome'
import { Button } from 'shared/components'
import t from 'i18n'

import SubTermEditor from './components/subTermEditor'
import columns from './column.descrtiption'
import styles from './styles'

const createTerms = () => [{
	id: 1,
	uniqueName: 'AN',
	displayName: 'Анализы',
	elements: [{
		name: 'КОЭ',
		isDefault: true,
	}, {
		name: 'СОЭ',
		isDefault: true,
	}],
}, {
	id: 1,
	uniqueName: 'HRG',
	displayName: 'ЭКГ',
	elements: [{
		name: 'Нормальный синусовый ритм. Правильный ритм с ЧСС 60—100 мин–1. Зубец P положителен в отведениях I, II, aVF, отрицателен в aVR. За каждым зубцом P следует комплекс QRS (в отсутствие АВ-блокады). Интервал PQ больше или равно 0,12 с ',
		isDefault: true,
	}, {
		name: 'Синусовая брадикардия. Правильный ритм. ЧСС < 60 мин–1. Синусовые зубцы P. Интервал PQ больше или равно 0,12 с. Причины: повышение парасимпатического тонуса (часто — у здоровых лиц, особенно во время сна;',
		isDefault: true,
	}],
}]

const DictionaryComponent = () => (
	<div className={css(styles.container)}>
		<div className={css(styles.buttonWrapper)}>
			<Button iconed>
				<FontAwesome name="plus" />{t('buttons.addTerm')}
			</Button>
		</div>
		<ReactTable
			data={createTerms()}
			columns={columns}
			showPagination={false}
			SubComponent={SubTermEditor} />
	</div>
)

DictionaryComponent.propTypes = {
}

export default DictionaryComponent
