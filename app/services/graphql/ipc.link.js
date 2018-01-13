import uuid from 'uuid'
import { ApolloLink, Observable } from 'apollo-link'
import { print } from 'graphql/language/printer'
import { GRAPHQL } from 'constants/graphql'

// eslint-disable-next-line
const { ipcRenderer } = nodeRequire('electron')

class IpcLink extends ApolloLink {
	constructor() {
		super()

		this.ipc = ipcRenderer
		this.listeners = new Map()
		this.ipc.on(GRAPHQL, this.listener.bind(this))
	}

	listener(_event, args) {
		const { id, payload } = args

		if (!id) {
			throw new Error('Listener id is not present!')
		}

		const observer = this.listeners.get(id)

		if (!observer) {
			throw new Error(`Listener with id ${id} does not exist!`)
		}

		observer.next(payload)
		observer.complete()

		this.listeners.delete(id)
	}

	generateMessage(id, operation) {
		return {
			id,
			payload: {
				...operation,
				query: print(operation.query)
			}
		}
	}

	setListener(operation, observer) {
		const id = uuid.v1()
		const message = this.generateMessage(id, operation)

		this.listeners.set(id, observer)
		this.ipc.send(GRAPHQL, message)
	}

	request(operation) {
		return new Observable(observer => {
			this.setListener(operation, observer)
		})
	}
}

export default IpcLink