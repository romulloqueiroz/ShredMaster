import { Path, LinearGradient, vec } from '@shopify/react-native-skia'
import { Skia } from '@shopify/react-native-skia'
import { gradients, deviceWidth } from '@styles'
import { LinePathProps } from './LinePath.types'

export const LinePath: React.FC<LinePathProps> = ({ path, color }) => {
  const COLORS = gradients[color].map(Skia.Color)

  return (
    <Path
      style='stroke'
      path={path}
      strokeWidth={2}
      strokeJoin='round'
      strokeCap='round'
    >
      <LinearGradient
        start={vec(0, 0)}
        end={vec(deviceWidth, 0)}
        colors={COLORS} />
    </Path>
  )
}
