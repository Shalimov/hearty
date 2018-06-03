import {
	darken,
	createPalette,
	createFontSizes,
} from 'utils/styles'

const completePaletteColoursCount = 20
const whitePalette = createPalette('white', 255, 255, 255)(completePaletteColoursCount)
const blackPalette = createPalette('black', 0, 0, 0)(completePaletteColoursCount)

const errorColor = '#FFE9E9'

export const colors = {
	gradients: {
		color1: 'linear-gradient(to right, #fdfbfb, #ebedee)',
		color2: 'linear-gradient(to right, #141e30, #243b55)',
	},

	color1: '#D9D9D9',
	color2: '#3459A6',
	color3: '#BFBFBF',
	color4: '#0D0F10',
	color5: '#EEEEEE',
	color6: '#B2B2B2',
	color7: '#727272',
	color8: '#2E2E2E',
	color9: '#F5F5F5',
	color10: '#1A1C1D',
	color11: '#BF0606',

	errorColor1: errorColor,
	errorColor2: darken(errorColor, 60),

	inherit: 'inherit',
	transparent: 'transparent',

	...whitePalette,
	...blackPalette,
}

export const font = {
	...createFontSizes(12, 110, 2),

	weight: {
		thin: 100,
		extraLight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
		heavy: 900,
	},
}

export const measures = {
	unit: 8,
	half: 4,
}

export default {
	colors,
	measures,
}
