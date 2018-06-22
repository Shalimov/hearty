import fp from 'lodash/fp'
import { withPropsOnChange } from 'recompose'

import ValidationFormModel from './validation.form.model'

const withFormModel = (description, opts) => {
	if (!(fp.isObject(description) || fp.isFunction(description))) {
		throw new Error('withFormModel expected description object or function')
	}

	const options = {
		as: 'formModel',
		spreadFields: false,
		...opts,
	}

	const descriptionProvider = fp.isFunction(description)
		? description
		: () => description

	const formModelProvider = wrapper => fp.flow(
		descriptionProvider,
		ValidationFormModel.fromDescription,
		wrapper
	)

	if (options.spreadFields) {
		return withPropsOnChange(
			['initialValues'],
			formModelProvider(formModel => ({
				[options.as]: formModel,
				...formModel.fields,
			})))
	}

	return withPropsOnChange(['initialValues'], formModelProvider(formModel => ({ [options.as]: formModel })))
}

export default withFormModel
