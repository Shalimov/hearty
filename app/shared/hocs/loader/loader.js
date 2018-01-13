import { branch, renderComponent, mapProps } from 'recompose'
import { ContentLoader } from 'shared/components'

const PermanentLoader = mapProps(() => ({
	isLoading: true,
}))(ContentLoader)

export default isLoading => branch(
	isLoading,
	renderComponent(PermanentLoader)
)
