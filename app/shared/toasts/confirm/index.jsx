import React from 'react'
import { toast } from 'react-toastify'

import ConfirmToast from './components/confirmToast'

let promise = null

export const showToast = message => {
	promise = promise || new Promise((resolve) => {
		let toastId = null

		const confirmToast = (
			<ConfirmToast message={message}
				onOk={() => {
					toast.dismiss(toastId)
					resolve(true)
					promise = null
				}}
				onCancel={() => {
					toast.dismiss(toastId)
					resolve(false)
					promise = null
				}}
			/>
		)

		toastId = toast.warn(confirmToast, {
			autoClose: false,
			closeButton: false,
			closeOnClick: false,
		})
	})

	return promise
}
