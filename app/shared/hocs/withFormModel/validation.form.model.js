import fp from 'lodash/fp'
import { computed } from 'mobx'

import ValidatedFieldModel from './validated.field.model'

class VadlidationFormModel {
	fields = null

	constructor(fields) {
		this.fields = fields
		fp.invokeArgsMap('setFormRef', [this], this.fields)
	}

	static create(fields) {
		return new VadlidationFormModel(fields)
	}

	static createFieldByDescriptor(fieldName, descriptor) {
		const isExtendedFormat = !fp.getOr(false, 'isValidator', descriptor)
		const initialValue = isExtendedFormat ? descriptor.initialValue : undefined
		const readonly = isExtendedFormat ? descriptor.readonly : false
		const scheme = isExtendedFormat ? descriptor.scheme : descriptor

		return ValidatedFieldModel.create(fieldName, initialValue, scheme, readonly)
	}

	static fromDescription(description) {
		const fields = fp.flow(
			fp.entries,
			fp.map(([fieldName, descriptor]) => [
				fieldName,
				VadlidationFormModel.createFieldByDescriptor(fieldName, descriptor),
			]),
			fp.fromPairs
		)(description)

		return VadlidationFormModel.create(fields)
	}

	@computed
	get isInvalid() {
		return fp.some('isInvalid', this.fields)
	}

	@computed
	get isValid() {
		return !this.isInvalid
	}

	@computed
	get value() {
		return fp.flow(
			fp.entries,
			fp.map(([key, item]) => [key, item.value]),
			fp.fromPairs,
		)(this.fields)
	}

	@computed
	get valueWithMeta() {
		return fp.flow(
			fp.entries,
			fp.map(([key, item]) => [key, { value: item.value, meta: item.meta }]),
			fp.fromPairs,
		)(this.fields)
	}

	setTouched(value) {
		fp.invokeArgsMap('setTouched', [value], this.fields)
	}

	reset() {
		fp.invokeMap('reset', this.fields)
	}

	addField({ name, initialValue, scheme, readonly, meta }) {
		const field = this.fields[name] = ValidatedFieldModel.create(name, initialValue, scheme, readonly)
		field.setMeta(meta)
		return field
	}
}

export default VadlidationFormModel
