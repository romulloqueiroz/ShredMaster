import { SkPath } from '@shopify/react-native-skia'
import { GradientsType } from '@styles'

export interface LinePathProps {
  path: SkPath
  color: keyof GradientsType
}

