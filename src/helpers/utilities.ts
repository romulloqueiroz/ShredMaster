import { deviceWidth } from '@styles'

export const addOpacity = (color: string, opacity: number): string => {
	const newOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
	return color + newOpacity.toString(16).toUpperCase()
}

export const getPx = (px: number) => (deviceWidth * px) / 375

export const truncateString = (str: string) => (str.length > 13 ? str.slice(0, 18) + "..." : str)

export const secondsToMinutes = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const minutesToSeconds = (minutes: number, seconds: number) => minutes * 60 + seconds

export const getModeColor = (mode: string) => {
  switch (mode) {
    case 'prepare':
      return 'yellow2'
    case 'work':
      return 'green2'
    case 'rest':
      return 'red2'
    case 'finished':
      return 'blue2'
    default:
      return 'blue2'
  }
}

export const getGradientColor = (mode: string) => {
  switch (mode) {
    case 'prepare':
      return 'yellow'
    case 'work':
      return 'green'
    case 'rest':
      return 'red'
    case 'finished':
      return 'blue'
    default:
      return 'blue'
  }
}