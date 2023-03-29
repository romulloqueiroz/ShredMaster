import {
  Skia,
  interpolateColors,
  Circle,
  Group,
  useComputedValue,
  Paint,
} from '@shopify/react-native-skia'
import { DotProps } from './Dot.types'
import { gradients } from '@styles'

export const Dot = ({ x, y, width, gradientColor }: DotProps) => {
  const COLORS = gradients[gradientColor].map(Skia.Color)

  const color = useComputedValue(
    () =>
      interpolateColors(
        x / width,
        COLORS.map((_, i) => i / COLORS.length),
        COLORS
      ),
    [x]
  )

  const transform = useComputedValue(
    () => [{ translateX: x }, { translateY: y }],
    [x, y]
  )

  return (
    <Group transform={transform}>
      <Circle cx={0} cy={0} r={8} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={4} color={color}>
        <Paint style='stroke' strokeWidth={1} color='white' />
      </Circle>
    </Group>
  )
}
