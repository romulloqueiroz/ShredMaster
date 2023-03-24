import { ColorType } from '@styles'

export interface CircularProgressProps {
  size?: number
  strokeWidth?: number
  color?: keyof ColorType
  duration?: number
  isPlaying?: boolean
  mode?: 'work' | 'rest' | 'prepare'
}
