import { GradientsType } from '@styles'

export interface ColorTagProps {
  color?: keyof GradientsType
  size?: number
  active?: boolean
  onPress?: () => void
}
