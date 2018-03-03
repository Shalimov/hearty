import React from 'react'
import fpc from 'lodash/fp'
import { ValidatedInput } from 'shared/components'
import ValidatedFieldModel from 'shared/hocs/withFormModel/validated.field.model'
import { stringHash } from 'utils/jwt.utils'
import Ego from 'utils/validation'

const fp = fpc.convert({ cap: false })

class CompiledTerm {
	static ACCEPTED_TYPES = ['text', 'date']
	static COMPILED_PART_PATTERN = /(\$[a-z]+)/

	compiledTermBindings = new Map()
	originalTerm = null
	splittedTerm = null
	compiledTerm = null

	constructor(term) {
		this.originalTerm = term
	}

	static renderInput(key, type, field) {
		return <ValidatedInput
			key={key}
			type={type}
			field={field}
			inlined />
	}

	static sanitizeType(type) {
		const retrievedType = type.substr(1)
		return CompiledTerm.ACCEPTED_TYPES.includes(retrievedType) ? retrievedType : 'text'
	}

	static compileTerm(term) {
		const hash = stringHash(term)
		const PATTERN = CompiledTerm.COMPILED_PART_PATTERN
		const splittedParts = fp.split(PATTERN, term)
		const compiledTermInstance = new CompiledTerm(term)

		const compiledTerm = fp.map((data, index) => {
			if (!PATTERN.test(data)) {
				return data
			}

			const fieldName = `${data}_${index}`
			const dynamicField = ValidatedFieldModel.create(fieldName, undefined, Ego.any().required(), false)

			compiledTermInstance.compiledTermBindings.set(fieldName, dynamicField)

			return CompiledTerm.renderInput(
				`${hash}_${index}`,
				CompiledTerm.sanitizeType(data),
				dynamicField
			)
		}, splittedParts)

		compiledTermInstance.splittedTerm = splittedParts
		compiledTermInstance.compiledTerm = compiledTerm

		return compiledTermInstance
	}

	render() {
		return this.compiledTerm
	}
}

export default CompiledTerm
