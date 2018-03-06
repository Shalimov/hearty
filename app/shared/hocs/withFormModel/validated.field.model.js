import bound from 'autobind-decorator'
import { observable, action, computed } from 'mobx'

const UPPER_CASE_PATTERN = /[A-Z]/g

class ValidatedFieldModel {
	id = undefined
	formRef = undefined
	name = undefined
	scheme = undefined
	@observable value = undefined
	@observable touched = false
	@observable dirty = false

	constructor(name, initialValue, scheme, readonly) {
		this.id = ValidatedFieldModel.toId(name)
		this.name = name
		this.label = scheme.labelKey
		this.readonly = readonly
		this.value = initialValue
		this.scheme = scheme
	}

	static toId(value) {
		UPPER_CASE_PATTERN.lastIndex = 0
		return value.replace(UPPER_CASE_PATTERN, symbol => `-${symbol.toLowerCase()}`)
	}

	static create(name, initialValue, scheme, readonly) {
		return new ValidatedFieldModel(name, initialValue, scheme, readonly)
	}

	setFormRef(formRef) {
		this.formRef = formRef
	}

	@computed
	get error() {
		return this.scheme.validate(this.value, { context: this.formRef })
	}

	@computed
	get isPristine() {
		return this.dirty
	}

	@computed
	get showError() {
		return this.touched && this.isInvalid
	}

	@computed
	get isInvalid() {
		return this.scheme.isInvalid(this.value, this.formRef)
	}

	@computed
	get isValid() {
		return !this.isInvalid
	}

	@action.bound
	setTouched(value) {
		this.touched = Boolean(value)
	}

	@bound
	onBlur() {
		this.setTouched(true)
	}

	@bound
	onChangeAndBlur(data) {
		this.onChange(data)
		this.onBlur()
	}

	@action.bound
	onChangeText(text) {
		this.value = text
		this.dirty = true
	}

	@bound
	onChange(event) {
		const { value } = event.target
		this.onChangeText(value)
	}

	@action.bound
	reset() {
		this.value = undefined
		this.touched = false
		this.dirty = false
	}
}

export default ValidatedFieldModel
