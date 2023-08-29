import { GradientsType } from '@styles'
import { TabataMode } from '@helpers'

export interface CircularProgressProps {
  size?: number
  strokeWidth?: number
  color?: keyof GradientsType
  duration?: number
  mode?: TabataMode
  maxValue: number
  currentValue: number
}
