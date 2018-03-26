const asSequence = handlers => (event) => {
	for (let handler of handlers) {
		if (handler(event) === false) {
			break
		}
	}
}

export {
	asSequence,
}
