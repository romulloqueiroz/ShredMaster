import { deviceWidth } from '@styles'
import { ColorType } from '@styles'

export const addOpacity = (color: string, opacity: number): string => {
	const newOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
	return color + newOpacity.toString(16).toUpperCase()
}

export const getPx = (px: number) => (deviceWidth * px) / 375

export const truncateString = (str: string) => (str.length > 13 ? str.slice(0, 18) + "..." : str)

export const secondsToMinutes = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export const minutesToSeconds = (minutes: number, seconds: number) => minutes * 60 + seconds

export type TabataMode = 'prepare' | 'work' | 'rest' | 'finished'

const MODE_COLOR_MAP: Record<TabataMode, keyof ColorType> = {
  prepare: 'yellow2',
  work: 'green2',
  rest: 'red2',
  finished: 'blue2'
}

export const getModeColor = (mode: TabataMode): keyof ColorType => {
  return MODE_COLOR_MAP[mode] || 'blue2'
}

const GRADIENT_COLOR_MAP: Record<TabataMode, string> = {
  prepare: 'yellow',
  work: 'green',
  rest: 'red',
  finished: 'blue'
}

export const getGradientColor = (mode: TabataMode) => {
  return GRADIENT_COLOR_MAP[mode] || 'blue'
}
