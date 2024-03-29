import { ColorType } from '@styles'

export interface LinearProgressProps {
  progress: number
  min?: number
  max?: number
  br?: number
  width?: number
  height?: number
  color?: keyof ColorType
}
