import { GradientsType, ColorType } from '@styles'

export interface CircularProgressProps {
  size?: number
  strokeWidth?: number
  color?: keyof GradientsType
  duration?: number
  isPlaying?: boolean
  mode?: 'work' | 'rest' | 'prepare' | 'finished'
}
