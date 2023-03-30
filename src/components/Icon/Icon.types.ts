import { IconType, ColorType } from '@styles'

export interface IconProps {
  name: IconType
  color: keyof ColorType
  size: number
  stroke?: string
}
