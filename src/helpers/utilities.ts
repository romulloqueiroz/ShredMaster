import { deviceWidth } from '@styles'

export const addOpacity = (color: string, opacity: number): string => {
	const newOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
	return color + newOpacity.toString(16).toUpperCase()
}

export const getPx = (px: number) => (deviceWidth * px) / 375

export const truncateString = (str: string) => (str.length > 13 ? str.slice(0, 18) + "..." : str)
