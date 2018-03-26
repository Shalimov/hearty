import withFormModel from './withFormModel'
import createRoutes from './create-routes'
import loader from './loader'
import * as authenticated from './authenticated'
import { withWizard, wizardExternalOpts } from './withWizard'
import { DialogProvider, connectDialogToHub, withDialog } from './dialogProvider'
import withHotkeys from './withHotkeys'

export {
	withFormModel,
	authenticated,
	createRoutes,
	loader,
	withHotkeys,
	withWizard,
	wizardExternalOpts,
	// Dialog stuff
	DialogProvider,
	connectDialogToHub,
	withDialog,
}
