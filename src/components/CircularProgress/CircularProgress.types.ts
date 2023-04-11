import { GradientsType, ColorType } from '@styles'

export interface CircularProgressProps {
  size?: number
  strokeWidth?: number
  color?: keyof GradientsType
  duration?: number
  isPlaying?: boolean
  mode?: 'prepare' | 'work' | 'rest' | 'finished'
}
