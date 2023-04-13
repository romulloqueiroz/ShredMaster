import React from 'react'
import { SkiaValue, Group, Circle, useComputedValue, Paint } from '@shopify/react-native-skia'

interface CursorProps {
  x: SkiaValue<number>
  y: SkiaValue<number>
  color: string
}

export const Cursor = ({ x, y, color }: CursorProps) => {
  const transform = useComputedValue(
    () => [{ translateX: x.current }, { translateY: y.current }],
    [x, y]
  )
  
  return (
    <Group transform={transform}>
      <Circle cx={0} cy={0} r={27} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={18} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={9} color={color}>
        <Paint style='stroke' strokeWidth={2} color='white' />
      </Circle>
    </Group>
  )
}
